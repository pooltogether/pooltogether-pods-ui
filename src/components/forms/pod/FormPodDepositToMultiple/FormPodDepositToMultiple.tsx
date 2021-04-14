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
import { commifyTokenBalanceFromHuman } from "@helpers/blockchain";
import {
  Select,
  ERC20Balance,
  ERC20UnlockTransferFrom,
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
  const { account } = useEthers();
  const [send, state] = usePodContractFunction(
    idx(formValues, (_) => _.pod.value),
    "depositTo"
  );

  const [prizePoolTokenCall] = usePodContractCall(
    idx(formValues, (_) => _.pod.value),
    "token"
  );

  const [tokenSymbol] = usePodContractCall(
    idx(formValues, (_) => _.pod.value),
    "symbol"
  );

  const [decimals] = usePodContractCall(
    idx(formValues, (_) => _.pod.value),
    "decimals"
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
    send(values.to, utils.parseUnits(values.tokenAmount, decimals));
  };

  /* ------------------------- */
  /* --- Component Renders --- */
  /* ------------------------- */

  /* --- Transaction Confetti Component --- */
  if (idx(state, (_) => _.status) == "Success") {
    return (
      <TransactionConfetti
        state={state}
        label="Successfully deposited"
        amount={withdrawAmount}
        symbol={tokenSymbol}
      />
    );
  }

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
            <div className="grid grid-cols-7">
              <div className="col-span-5">
                <input
                  className="input-skinny text-xl font-light text-white w-full"
                  name="tokenAmount"
                  placeholder="Amount"
                  ref={register({ required: true })}
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
            <Spacer className="my-2" />

            <ERC20UnlockTransferFrom
              address={prizePoolTokenCall}
              allowanceOf={idx(formValues, (_) => _.pod.value)}
            >
              <button className="btn btn-purple w-full">{label}</button>
            </ERC20UnlockTransferFrom>
          </form>
        </>
      )}
    </>
  );
};

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
