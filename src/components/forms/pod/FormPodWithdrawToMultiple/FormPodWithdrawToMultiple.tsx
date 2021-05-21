/* --- Global Modules --- */
import idx from "idx";
import _ from "lodash";
import React, { useState, useEffect } from "react";
import { utils } from "ethers";
import { useEthers } from "@usedapp/core";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

/* --- Local Modules --- */
import { IPodForm } from "@src/interfaces/forms";
import { useGetPodSelectOptions } from "@hooks/useGetPodSelectOptions";
import { selectTokenDropStyles } from "../select-tokendrop-styles";
import {
  commifyTokenBalanceFromHuman,
  transformTokenToHuman,
} from "@helpers/blockchain";
import { useERC20ContractCall } from "@hooks/useContractERC20";
import { useGetPodContract } from "@src/hooks/contracts";
import {
  Select,
  ERC20Balance,
  TokenBalance,
  TransactionConfetti,
  TransactionMining,
  WalletIsConnected,
  Spacer,
  SelectTokenWithAmountInput,
} from "@components";

// Contracts
import {
  usePodContractCall,
  usePodContractFunction,
} from "@hooks/useContractPod";

/**
 * @name PodDepositTo
 * @description Execute PodDepositTo transaction
 * @return Component
 */
export const FormPodDepositToMultiple = ({
  label,
  defaultToken,
  defaultValues,
}: IPodForm) => {
  /* --- Component State --- */
  /* ----------------------- */
  const [withdrawAmount, withdrawAmountSet] = useState();
  const selectOptions = useGetPodSelectOptions();

  // Exit Fee
  const [earlyExitFee, earlyExitFeeSet] = useState();
  const [earlyExitFeeError, earlyExitFeeErrorSet] = useState();

  const [cachedValues, cachedValuesSet] = useState({});

  /* ------------------ */
  /* --- Form State --- */
  /* ------------------ */
  const {
    handleSubmit,
    register,
    control,
    setValue,
    watch,
    formState,
  } = useForm({
    defaultValues: {
      pod: selectOptions[0],
    },
  });
  const formValues = watch();

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const contract = useGetPodContract(idx(formValues, (_) => _.pod.value));
  const { account } = useEthers();

  // Pod Contract
  const [send, state] = usePodContractFunction(
    idx(formValues, (_) => _.pod.value),
    "withdraw"
  );

  const [decimals] = usePodContractCall(
    idx(formValues, (_) => _.pod.value),
    "decimals"
  );

  const [prizePoolTokenCall] = usePodContractCall(
    idx(formValues, (_) => _.pod.value),
    "token"
  );

  const [podTokenBalance] = usePodContractCall(
    cachedValues.token,
    "balanceOf",
    [idx(formValues, (_) => _.pod.value)]
  );

  // ERC20 Contract
  const [tokenSymbol] = useERC20ContractCall(cachedValues.token, "symbol");

  /* ----------------------- */
  /* --- Component Hooks --- */
  /* ----------------------- */
  // Set Default Token :: Effect
  useEffect(() => {
    if (defaultToken) {
      const filtered = selectOptions.filter((option) => {
        return utils.getAddress(option.value) == utils.getAddress(defaultToken);
      });
      if (filtered.length > 0) {
        setValue("pod", filtered[0]);
      }
    }
  }, []);

  useEffect(() => {
    if (account) setValue("to", account);
  }, [account]);

  // Cache Contract Call : Effect
  useEffect(() => {
    if (prizePoolTokenCall) {
      cachedValuesSet({
        token: prizePoolTokenCall,
      });
    }
  }, [prizePoolTokenCall]);

  /* -------------------------- */
  /* --- Component Handlers --- */
  /* -------------------------- */

  /* --- Submit Handler --- */
  const onSubmit = async (values) => {
    send(
      utils.parseUnits(values.shareAmount, decimals),
      utils.parseUnits(values.maxFee, decimals)
    );

    // Set Withdraw Amount Constant
    withdrawAmountSet(commifyTokenBalanceFromHuman(values.shareAmount));
  };

  const setInputAmountMax = () => {
    setValue("tokenAmount", utils.formatUnits(podTokenBalance, decimals));
  };

  /* --------------------------- */
  /* --- Contract Throttling --- */
  /* --------------------------- */
  const calculateEarlyExitFee = () => {
    if (idx(formValues, (_) => _.shareAmount)) {
      (async () => {
        try {
          const getEarlyExitFee = await contract.callStatic.getEarlyExitFee(
            utils.parseEther(formValues.shareAmount, decimals)
          );
          earlyExitFeeSet(getEarlyExitFee);
          setValue("maxFee", transformTokenToHuman(getEarlyExitFee.toString()));
          earlyExitFeeErrorSet(false);
        } catch (error) {
          earlyExitFeeErrorSet("Exceeds Pod Token/Ticket Holdings");
          console.log(error, "earlyExitFeeErrorERROR");
        }
      })();
    }
  };

  const throttleEarlyExitFee = _.debounce(calculateEarlyExitFee, 400, {
    maxWait: "2000",
  });

  /* ------------------------- */
  /* --- Component Renders --- */
  /* ------------------------- */
  /* --- Transaction Mining Component --- */
  if (idx(state, (_) => _.status) == "Mining") {
    return (
      <TransactionMining
        state={state}
        amount={withdrawAmount}
        action="Withdrawing"
        symbol={tokenSymbol}
      />
    );
  }

  /* --- Transaction Confetti Component --- */
  if (idx(state, (_) => _.status) == "Success") {
    return (
      <TransactionConfetti
        state={state}
        action="Successfully withdrawn"
        amount={withdrawAmount}
        symbol={tokenSymbol}
      />
    );
  }

  /* --- Form Component --- */
  return (
    <>
      <div className="flex items-center justify-between">
        <span className="text-gray-100">Withdraw</span>
        <span className="">
          {!idx(formValues, (_) => _.pod.value) ? (
            "0.00"
          ) : (
            <ERC20Balance
              account={account}
              address={idx(formValues, (_) => _.pod.value)}
            />
          )}
          <span className="ml-1">Balance</span>
        </span>
      </div>
      <Spacer className="my-1" />
      <form
        className={"form-default text-gray-600"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          hidden
          className="input-default mb-1"
          name="to"
          placeholder="To"
          ref={register({ required: true })}
        />

        <SelectTokenWithAmountInput
          name="shareAmount"
          nameSelect="pod"
          register={register}
          control={control}
          styles={selectTokenDropStyles}
          options={selectOptions}
          onInputChange={throttleEarlyExitFee}
          actionMax={setInputAmountMax}
          classNameInput="bg-transparent text-xl font-light text-white h-full w-full focus:outline-none"
          classNameInputContainer="bg-teal-600 bg-opacity-20 h-15 flex items-center justify-between input-skinny relative"
          // classNameSelectContainer="ml-0 text-gray-600 bg-teal-600 bg-opacity-20"
        />

        {/* <div className="grid grid-cols-7">
          <div className="col-span-5">
            <input
              className="input-skinny text-xl font-light text-white w-full"
              name="shareAmount"
              placeholder={`Amount ${
                !formValues.pod ? "(Select Token First)" : ""
              }`}
              ref={register({ required: true })}
              disabled={!formValues.pod}
              onChange={throttleEarlyExitFee}
              style={{
                background: "rgba(14,163,164,0.2)",
                height: 50,
              }}
            />
          </div>
          <div className="col-span-2 ml-0 text-gray-600">
            <Select
              name="pod"
              className="h-50"
              placeholder="Token"
              styles={selectTokenDropStyles}
              options={selectOptions}
              control={control}
            />
          </div>
        </div>
        <input
          hidden
          className="input-skinny text-xl font-light text-white w-full"
          name="maxFee"
          placeholder="MaxFee"
          ref={register({ required: true })}
          style={{
            background: "rgba(14,163,164,0.2)",
            height: 50,
          }}
        /> */}
        <input
          hidden
          className="input-skinny text-xl font-light text-white w-full"
          name="maxFee"
          placeholder="MaxFee"
          ref={register({ required: true })}
          style={{
            background: "rgba(14,163,164,0.2)",
            height: 50,
          }}
        />
        <Spacer className="my-2" />
        <WalletIsConnected>
          <button className="btn btn-purple-light w-full">{label}</button>
        </WalletIsConnected>
        {earlyExitFeeError && (
          <>
            <Spacer className="my-1" />
            <span className="inline-block text-red-500 mx-auto">
              {earlyExitFeeError}
            </span>
          </>
        )}
        <Spacer className="my-5" />
        <div className="text-center">
          <span className="tag-reds text-yellow-500 text-sm font-normal mx-auto">
            <span className="text-md">⚠️</span> Withdrawing everything will make
            you ineligible to receive my share if pod wins
          </span>
        </div>
        <Spacer className="my-5" />
        <div className="grid grid-cols-2 gap-x-6">
          <div className="bg-purple-500 bg-opacity-30 rounded-md p-3 text-center">
            <span className="block text-normal text-teal-700 font-light">
              Pod's Float
            </span>
            <TokenBalance
              className="text-4xl text-white"
              balance={podTokenBalance}
              decimalsTrim={4}
              decimals={decimals}
            />
          </div>
          <div className="bg-purple-500 bg-opacity-30 rounded-md p-3 text-center">
            <span className="block text-normal text-teal-700 font-light">
              Your early exit fee:
            </span>
            <span className="text-4xl text-white">
              <TokenBalance
                className="mr-1"
                balance={earlyExitFee}
                decimalsTrim={4}
                decimals={decimals}
              />
              {tokenSymbol}
            </span>
            <Spacer className="my-3" />
          </div>
        </div>
      </form>
    </>
  );
};

FormPodDepositToMultiple.defaultProps = {
  className: "",
  label: "Withdraw",
  displayLabels: true,
  defaultValues: {},
};

FormPodDepositToMultiple.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  displayLabels: PropTypes.bool,
  defaultValues: PropTypes.object,
};

export default FormPodDepositToMultiple;
