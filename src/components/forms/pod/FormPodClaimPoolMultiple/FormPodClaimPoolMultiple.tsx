/* --- Global Modules --- */
import idx from "idx";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useEthers } from "@usedapp/core";
import { useForm } from "react-hook-form";
import { utils } from "ethers";

/* --- Local Modules --- */
import { IPodForm } from "@src/interfaces/forms";
import { selectTokenDropStyles } from "../select-tokendrop-styles";
import {
  commifyTokenBalance,
  transformTokenToHuman,
} from "@helpers/blockchain";

import { useGetTokenDropContract } from "@src/hooks/contracts";
import { useContractTokenDropFunction } from "@src/hooks/useContractTokenDrop";
import { useGetPodAndTokenDropSelectOptions } from "@src/hooks/useGetPodAndTokenDropSelectOptions";
import {
  TransactionConfetti,
  TransactionMining,
  Spacer,
  WalletIsConnected,
  Select,
  TokenOption,
  TokenSingleValue,
} from "@src/components";

/**
 * @name PodDepositTo
 * @description Execute PodDepositTo transaction
 * @return Component
 */
export const FormPodWithdrawToMultiple = ({
  label,
  defaultToken,
  defaultValues,
}: IPodForm) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */
  const [claimAmount, claimAmountSet] = useState();
  const selectOptions = useGetPodAndTokenDropSelectOptions();

  /* ------------------ */
  /* --- Form State --- */
  /* ------------------ */
  const { handleSubmit, register, control, setValue, watch } = useForm({
    defaultValues: { pod: selectOptions[0] },
  });
  const formValues = watch();

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers();
  const contract = useGetTokenDropContract(idx(formValues, (_) => _.pod.drop));
  const [send, state] = useContractTokenDropFunction(
    idx(formValues, (_) => _.pod.drop),
    "claim"
  );

  /* ------------------------ */
  /* --- Blockchain Hooks --- */
  /* ------------------------ */
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

  // Update User Account : Effect
  useEffect(() => {
    if (account) setValue("user", account);
  }, [account]);

  // Effect : Update Claimable POOl Tokens
  useEffect(() => {
    if (contract) {
      (async () => {
        const amount = await contract.callStatic.claim(account);
        setValue("poolAmount", transformTokenToHuman(amount.toString()));
      })();
    }
  }, [idx(formValues, (_) => _.pod.value)]);

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
  /* --- Transaction Mining Component --- */
  if (idx(state, (_) => _.status) == "Mining") {
    return (
      <TransactionMining
        state={state}
        amount={claimAmount}
        action="Withdrawing"
        symbol={"POOL"}
      />
    );
  }

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
              styles={selectTokenDropStyles}
              options={selectOptions}
              components={{
                Option: TokenOption,
                SingleValue: TokenSingleValue,
              }}
            />
          </div>
        </div>
        <Spacer className="my-2" />
        <WalletIsConnected>
          <button className="btn btn-purple-light w-full">{label}</button>
        </WalletIsConnected>
      </form>
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
