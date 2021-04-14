/* --- Global Modules --- */
import idx from "idx";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

/* --- Local Modules --- */
import { useGetPodContract } from "@hooks/contracts";
import { useGetAllPodAddress } from "@hooks/contractAddress";
import { usePodContractFunction } from "@hooks/useContractPod";
import { commifyTokenBalance } from "@helpers/blockchain";
import { Select, Spacer } from "@components";
import { customStyles } from "./selectStyles.ts";

// Interface
interface IPodClaimPodPoolProps {
  className: string;
  children?: React.ReactNode;
  label: string;
  displayLabels: boolean;
  defaultValues: object;
}

/**
 * @name PodClaimPodPool
 * @description Execute PodClaimPodPool transaction
 * @return Component
 */
export const FormPodClaimPodPool = ({
  className,
  label,
  defaultValues,
  displayLabels,
}: IPodClaimPodPoolProps) => {
  /* --- Component State --- */
  const [podClaimableAmount, podClaimableAmountSet] = useState();
  const { PodDAI, PodUSDC, PodCOMP, PodUNI } = useGetAllPodAddress();

  /* --- Form State --- */
  const { handleSubmit, register, control, watch } = useForm({ defaultValues });
  const formValues = watch();

  /* --- Blockchain State --- */
  const contract = useGetPodContract(idx(formValues, (_) => _.pod.value));
  const [send, state] = usePodContractFunction(
    idx(formValues, (_) => _.pod.value),
    "claimPodPool"
  );

  // Effect : Update Claimable POOl Tokens
  useEffect(() => {
    if (contract) {
      (async () => {
        const claimPOOLAmount = await contract.callStatic.claimPodPool();
        podClaimableAmountSet(commifyTokenBalance(claimPOOLAmount));
      })();
    }
  }, [contract]);

  /* --- Submit Handler --- */
  const onSubmit = async (values) => {
    send();
    // if (values) {
    //   contractMethod.execute({
    //     inputs: [],
    //     params: {
    //       value: utils.parseEther("0"),
    //     },
    //     contract: "Pod",
    //     name: "Pod-claimPodPool",
    //     methodName: "claimPodPool",
    //     inputDisplay: [],
    //   });
    // }
  };

  /* --- Form Component --- */
  return (
    <form className={"form-default"} onSubmit={handleSubmit(onSubmit)}>
      <span className="">Claimable Amount:{podClaimableAmount}</span>
      <Spacer className="my-2" />
      <div className="grid grid-cols-7">
        <div className="col-span-5 ml-0 text-gray-600">
          <Select
            name="pod"
            className="h-50"
            placeholder="Select Pod"
            styles={customStyles}
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
      <Spacer className="my-3" />
      <button type="submit" className="btn btn-purple w-full">
        {label}
      </button>
    </form>
  );
};

FormPodClaimPodPool.defaultProps = {
  className: "",
  label: "Submit",
  displayLabels: true,
  defaultValues: {},
};

FormPodClaimPodPool.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  displayLabels: PropTypes.bool,
  defaultValues: PropTypes.object,
};

export default FormPodClaimPodPool;
