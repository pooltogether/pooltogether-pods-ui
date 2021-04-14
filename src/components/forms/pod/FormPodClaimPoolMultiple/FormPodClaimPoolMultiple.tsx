/* --- Global Modules --- */
import idx from "idx";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useEthers } from "@usedapp/core";
import { useForm } from "react-hook-form";
import { utils } from "ethers";

/* --- Local Modules --- */
import { IPodForm } from "@src/interfaces/forms";

import { useGetAllPodAddress } from "@hooks/contractAddress";
import { useGetPodContract } from "@src/hooks/contracts";
import {
  commifyTokenBalance,
  transformTokenToHuman,
} from "@helpers/blockchain";
import { RubiksCube, TransactionConfetti, Spacer } from "@components";
import { Select } from "@components";

import { customStyles } from "./selectStyles.ts";
import { usePodContractFunction } from "@src/hooks/useContractPod";

/**
 * @name PodDepositTo
 * @description Execute PodDepositTo transaction
 * @return Component
 */
export const FormPodWithdrawToMultiple = ({
  className,
  label,
  defaultValues,
  displayLabels,
}: IPodForm) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */
  const [claimAmount, claimAmountSet] = useState();
  const { PodDAI, PodUSDC, PodCOMP, PodUNI } = useGetAllPodAddress();

  /* ------------------ */
  /* --- Form State --- */
  /* ------------------ */
  const {
    handleSubmit,
    register,
    control,
    formState,
    setValue,
    watch,
  } = useForm({
    defaultValues,
  });
  const formValues = watch();

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers();
  const contract = useGetPodContract(idx(formValues, (_) => _.pod.value));
  const [send, state] = usePodContractFunction(
    idx(formValues, (_) => _.pod.value),
    "claim"
  );
  // const [prizePoolTokenCall] = usePodContractCall(
  //   idx(formValues, (_) => _.pod.value),
  //   "token"
  // );

  // const [tokenSymbol] = usePodContractCall(
  //   idx(formValues, (_) => _.pod.value),
  //   "symbol"
  // );

  /* ------------------------ */
  /* --- Blockchain Hooks --- */
  /* ------------------------ */
  // Update User Account : Effect
  useEffect(() => {
    if (account) setValue("user", account);
  }, [account]);

  // Effect : Update Claimable POOl Tokens
  useEffect(() => {
    if (contract) {
      (async () => {
        const claimPOOLAmount = await contract.callStatic.claim(account);
        setValue(
          "poolAmount",
          transformTokenToHuman(claimPOOLAmount.toString())
        );
      })();
    }
  }, [contract, formValues.pod]);

  /* ---------------------- */
  /* --- Submit Handler --- */
  /* ---------------------- */
  const onSubmit = async (values) => {
    if (values) {
      claimAmountSet(
        commifyTokenBalance(utils.parseEther(formValues.poolAmount).toString())
      );
      send(account);
    }
  };

  /* ------------------------- */
  /* --- Component Renders --- */
  /* ------------------------- */

  /* --- Transaction Confetti Component --- */
  if (idx(state, (_) => _.status) == "Success") {
    return (
      <TransactionConfetti
        state={state}
        label="Successfully claimed"
        amount={claimAmount}
        symbol={"POOL"}
      />
    );
  }

  /* --- Form Component --- */
  return (
    <>
      {formState.isSubmitted && idx(state, (_) => _.status) == "Mining" ? (
        <div className="text-center">
          <div className="">
            <span className="text-2xl">Claiming {claimAmount} POOL</span>
          </div>

          <>
            <div className="inline-block -ml-14" style={{ maxWidth: 60 }}>
              <RubiksCube />
            </div>
          </>
        </div>
      ) : (
        <>
          <form
            className={"form-default text-gray-600"}
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              hidden
              className="input-skinny"
              name="user"
              placeholder="user"
              ref={register({ required: true })}
              style={{
                background: "rgba(14,163,164,0.2)",
                height: 50,
              }}
            />

            {/* Balance Display : Start */}
            <div className="flex items-center justify-between">
              <span className="text-gray-100">POOL Claim Amount</span>
            </div>
            <Spacer className="my-1" />
            {/* Balance Display : End */}

            {/* Share Amount Display : Start */}
            <div className="grid grid-cols-7">
              <div className="col-span-5">
                <input
                  disabled
                  className="input-skinny text-xl font-light text-white w-full"
                  name="poolAmount"
                  placeholder="Pool Amount"
                  ref={register({ required: false })}
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
                  control={control}
                  placeholder="Select Pod"
                  styles={customStyles}
                  options={[
                    {
                      value: PodDAI,
                      label: "DAI Pod",
                    },
                    {
                      value: PodUSDC,
                      label: "USDC Pod",
                    },
                    {
                      value: PodCOMP,
                      label: "COMP Pod",
                    },
                    {
                      value: PodUNI,
                      label: "UNI Pod",
                    },
                  ]}
                />
              </div>
              {/* Share Amount Display : End */}
            </div>
            <Spacer className="my-2" />
            <button className="btn btn-purple w-full">{label}</button>
          </form>
        </>
      )}
    </>
  );
};

FormPodWithdrawToMultiple.defaultProps = {
  className: "",
  label: "Claim POOL",
  displayLabels: true,
  defaultValues: {},
};

FormPodWithdrawToMultiple.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  displayLabels: PropTypes.bool,
  defaultValues: PropTypes.object,
};

export default FormPodWithdrawToMultiple;
