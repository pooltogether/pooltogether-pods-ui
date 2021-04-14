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
import { useGetAllPodAddress } from "@hooks/contractAddress";
import {
  commifyTokenBalanceFromHuman,
  transformTokenToHuman,
} from "@helpers/blockchain";
import {
  Select,
  ERC20Balance,
  TokenBalance,
  RubiksCube,
  TransactionConfetti,
  Spacer,
} from "@components";
import { selectTokenDropStyles } from "../select-tokendrop-styles";

// Contracts
import {
  usePodContractCall,
  usePodContractFunction,
} from "@hooks/useContractPod";
import { useGetPodContract } from "@src/hooks/contracts";

/**
 * @name PodDepositTo
 * @description Execute PodDepositTo transaction
 * @return Component
 */
export const FormPodDepositToMultiple = ({
  label,
  defaultValues,
}: IPodForm) => {
  /* --- Component State --- */
  /* ----------------------- */
  const [withdrawAmount, withdrawAmountSet] = useState();
  const { PodDAI, PodUSDC, PodCOMP, PodUNI } = useGetAllPodAddress();

  // Exit Fee
  const [earlyExitFee, earlyExitFeeSet] = useState();
  const [earlyExitFeeError, earlyExitFeeErrorSet] = useState();

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
    defaultValues,
  });
  const formValues = watch();

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const contract = useGetPodContract(idx(formValues, (_) => _.pod.value));
  const { account } = useEthers();
  const [send, state] = usePodContractFunction(
    idx(formValues, (_) => _.pod.value),
    "withdraw"
  );

  const [prizePoolTokenCall] = usePodContractCall(
    idx(formValues, (_) => _.pod.value),
    "token"
  );

  const [tokenSymbol] = usePodContractCall(
    idx(formValues, (_) => _.pod.value),
    "symbol"
  );

  const [podTokenBalanceBalance] = usePodContractCall(
    idx(formValues, (_) => _.pod.value),
    "balanceOf",
    [account]
  );

  const [podTokenSymbol] = usePodContractCall(prizePoolTokenCall, "symbol");
  const [podTokenBalance] = usePodContractCall(
    prizePoolTokenCall,
    "balanceOf",
    [idx(formValues, (_) => _.pod.value)]
  );

  /* ----------------------- */
  /* --- Component Hooks --- */
  /* ----------------------- */
  useEffect(() => {
    if (account) setValue("to", account);
  }, [account]);

  /* -------------------------- */
  /* --- Component Handlers --- */
  /* -------------------------- */

  /* --- Submit Handler --- */
  const onSubmit = async (values) => {
    withdrawAmountSet(commifyTokenBalanceFromHuman(values.tokenAmount));
    send(
      utils.parseUnits(values.shareAmount, 18),
      utils.parseUnits(values.maxFee, 18)
    );
  };

  /* ------------------------- */
  /* --- Component Renders --- */
  /* ------------------------- */

  if (idx(state, (_) => _.status) == "Success") {
    return (
      <TransactionConfetti
        state={state}
        label="Successfully withdrawn"
        amount={withdrawAmount}
        symbol={tokenSymbol}
      />
    );
  }

  /* --------------------------- */
  /* --- Contract Throttling --- */
  /* --------------------------- */
  const calculateEarlyExitFee = () => {
    if (idx(formValues, (_) => _.shareAmount)) {
      (async () => {
        try {
          const getEarlyExitFee = await contract.callStatic.getEarlyExitFee(
            utils.parseEther(formValues.shareAmount)
          );
          console.log(
            getEarlyExitFee.toString(),
            "getEarlyExitFeegetEarlyExitFee123123"
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

  /* --- Form Component --- */
  return (
    <>
      {formState.isSubmitted && idx(state, (_) => _.status) == "Mining" ? (
        <div className="text-center">
          <div className="">
            <span className="text-2xl">Withdrawing {withdrawAmount} DAI</span>
          </div>

          <>
            <div className="inline-block -ml-14" style={{ maxWidth: 60 }}>
              <RubiksCube />
            </div>
          </>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2">
            <div className="text-center">
              <TokenBalance
                className="text-3xl"
                balance={podTokenBalance}
                decimalsTrim={4}
              />
              <span className="block text-xs font-light">
                Pod{" "}
                <span className="font-bold text-teal">{podTokenSymbol}</span>{" "}
                Reserves (4 decimals)
              </span>
              <Spacer className="my-3" />
            </div>
            <div className="text-center">
              <span className="text-3xl">
                <TokenBalance
                  className="mr-1"
                  balance={earlyExitFee}
                  decimalsTrim={4}
                />
                {podTokenSymbol}
              </span>
              <span className="block text-xs font-light">
                Early Exit Fee (4 decimals)
              </span>
              <Spacer className="my-3" />
            </div>
          </div>
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

            <div className="grid grid-cols-7">
              <div className="col-span-5">
                <input
                  className="input-skinny text-xl font-light text-white w-full"
                  name="shareAmount"
                  placeholder="Amount"
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
                  options={[
                    {
                      value: PodDAI,
                      label: "DAI",
                    },
                    {
                      value: PodUSDC,
                      label: "USDC",
                    },
                    {
                      value: PodCOMP,
                      label: "COMP",
                    },
                    {
                      value: PodUNI,
                      label: "UNI",
                    },
                  ]}
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
            />
            <Spacer className="my-2" />
            <button className="btn btn-purple w-full">{label}</button>
            {earlyExitFeeError && (
              <>
                <Spacer className="my-1" />
                <span className="inline-block text-red-500 mx-auto">
                  {earlyExitFeeError}
                </span>
              </>
            )}
            <Spacer className="my-10" />
            <div className="text-center">
              <span className="tag-reds text-red-500 text-sm font-normal mx-auto">
                <span className="text-md">⚠️</span> Withdrawing everything will
                make you ineligible to receive my share if pod wins
              </span>
            </div>
          </form>
        </>
      )}
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
