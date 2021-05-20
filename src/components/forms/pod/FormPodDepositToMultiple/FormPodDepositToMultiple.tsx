/* --- Global Modules --- */
import idx from "idx";
import React, { useState, useEffect } from "react";
import { utils } from "ethers";
import { useEthers } from "@usedapp/core";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

/* --- Local Modules --- */
import { IPodForm } from "@src/interfaces/forms";
import { useGetAllPodAddress } from "@hooks/contractAddress";
import { selectTokenDropStyles } from "../select-tokendrop-styles";
import { commifyTokenBalanceFromHuman } from "@helpers/blockchain";
import { useERC20ContractCall } from "@hooks/useContractERC20";
import { useGetPodSelectOptions } from "@hooks/useGetPodSelectOptions";
import {
  Select,
  ERC20Balance,
  ERC20UnlockTransferFrom,
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

import { convertNumberToBigNumber } from "@src/helpers/convert";
import classNames from "classnames";
import { isBigNumber } from "@src/helpers/checks";
import { TokenSingleValue } from "@src/components/core/fields/TokenSingleValue";
import { TokenOption } from "@src/components/core/fields/TokenOption";

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
  const selectOptions = useGetPodSelectOptions();
  const [cachedValues, cachedValuesSet] = useState({});
  const [isDisabled, isDisabledSet] = useState();

  /* ------------------ */
  /* --- Form State --- */
  /* ------------------ */
  const { handleSubmit, register, control, setValue, watch } = useForm({
    defaultValues,
  });
  const formValues = watch();

  console.log(selectOptions, "selectOptionsselectOptions");

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers();
  const [send, state] = usePodContractFunction(
    idx(formValues, (_) => _.pod.value),
    "depositTo"
  );

  const [prizePoolTokenCall] = usePodContractCall(
    idx(formValues, (_) => _.pod.value),
    "token"
  );

  const [decimals] = useERC20ContractCall(cachedValues.token, "decimals");
  const [tokenSymbol] = useERC20ContractCall(cachedValues.token, "symbol");
  const [balanceOf] = useERC20ContractCall(cachedValues.token, "balanceOf", [
    account,
  ]);
  /* ----------------------- */
  /* --- Component Hooks --- */
  /* ----------------------- */
  useEffect(() => {
    if (account) setValue("to", account);
  }, [account]);

  useEffect(() => {
    if (prizePoolTokenCall) {
      cachedValuesSet({
        token: prizePoolTokenCall,
      });
    }
  }, [prizePoolTokenCall]);

  const [error, errorSet] = useState();
  useEffect(() => {
    console.log(decimals, "decimalsdecimalsdecimals");
    if (formValues && formValues.tokenAmount && isBigNumber(balanceOf)) {
      const amount = convertNumberToBigNumber(formValues.tokenAmount, decimals);
      if (amount.gt(balanceOf)) {
        isDisabledSet(true);
        errorSet("You don’t have enough balance.");
      } else {
        isDisabledSet(false);
        errorSet(undefined);
      }
    } else {
      isDisabledSet(false);
      errorSet(undefined);
    }
  }, [formValues, decimals]);

  /* -------------------------- */
  /* --- Component Handlers --- */
  /* -------------------------- */

  const setInputAmountMax = () => {
    setValue("tokenAmount", utils.formatUnits(balanceOf, decimals));
  };

  /* --- Submit Handler --- */
  const onSubmit = async (values) => {
    withdrawAmountSet(commifyTokenBalanceFromHuman(values.tokenAmount));
    send(values.to, utils.parseUnits(values.tokenAmount, decimals));
  };

  /* ------------------------- */
  /* --- Component Renders --- */
  /* ------------------------- */
  /* --- Transaction Mining Component --- */
  if (idx(state, (_) => _.status) == "Mining") {
    return (
      <span className="">
        <TransactionMining
          state={state}
          amount={withdrawAmount}
          action="Depositing"
          symbol={tokenSymbol}
        />
      </span>
    );
  }

  /* --- Transaction Confetti Component --- */
  if (idx(state, (_) => _.status) == "Success") {
    return (
      <TransactionConfetti
        state={state}
        action={"Successfully deposited"}
        amount={withdrawAmount}
        symbol={tokenSymbol}
      />
    );
  }

  const classNameButton = classNames({
    "btn-purple bg-purple-700 text-black-60": isDisabled,
    "btn-purple text-purple-900 btn-gradient btn-gradient-2": !isDisabled,
  });

  /* --- Form Component --- */
  return (
    <>
      <>
        <div className="flex items-center justify-between">
          <span className="text-gray-100">Deposit</span>
          <span className="">
            {!prizePoolTokenCall ? (
              "0.00"
            ) : (
              <ERC20Balance account={account} address={prizePoolTokenCall} />
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
            name="tokenAmount"
            nameSelect="pod"
            register={register}
            control={control}
            styles={selectTokenDropStyles}
            options={selectOptions}
            actionMax={setInputAmountMax}
            classNameInput="bg-transparent text-xl font-light text-white h-full w-full focus:outline-none"
            classNameInputContainer="bg-teal-600 bg-opacity-20 h-15 flex items-center justify-between input-skinny relative"
            // classNameSelectContainer="ml-0 text-gray-600 bg-teal-600 bg-opacity-20"
          />
          {/* <div className="grid grid-cols-7">
            <div className="col-span-5 bg-teal-600 bg-opacity-20 h-15 flex items-center justify-between input-skinny relative">
              <input
                className="bg-transparent text-xl font-light text-white w-full focus:outline-none"
                name="tokenAmounts"
                type="number"
                placeholder={`Enter Amount to deposit ${
                  !formValues.pod ? "(Select Token First)" : ""
                }`}
                ref={register({ required: true })}
                disabled={!formValues.pod}
              />
              <span className="">
                <span
                  onClick={setInputAmountMax}
                  className="bg-teal-600 bg-opacity-20 text-white p-1 px-3 cursor-pointer rounded-md"
                >
                  max
                </span>
              </span>
            </div>
            <div className="col-span-2 ml-0 text-gray-600">
              <Select
                name="pod"
                className="h-50"
                placeholder="Token"
                components={{
                  Option: TokenOption,
                  SingleValue: TokenSingleValue,
                }}
                styles={selectTokenDropStyles}
                options={selectOptions}
                control={control}
              />
            </div>
          </div> */}
          {error && <span className="text-red-400 my-0">{error}</span>}
          <Spacer className="my-2" />
          <WalletIsConnected>
            <ERC20UnlockTransferFrom
              address={prizePoolTokenCall}
              allowanceOf={idx(formValues, (_) => _.pod.value)}
            >
              <button disabled={isDisabled} className={classNameButton}>
                {label}
              </button>
            </ERC20UnlockTransferFrom>
          </WalletIsConnected>
        </form>
      </>
    </>
  );
};

// export default CustomOption;

FormPodDepositToMultiple.defaultProps = {
  className: "",
  label: "Deposit",
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
