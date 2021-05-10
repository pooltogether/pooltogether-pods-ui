/* --- Global Modules --- */
import idx from "idx";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

/* --- Local Modules --- */
import { useGetAllPodAddress } from "@hooks/contractAddress";
import { usePodContractFunction } from "@hooks/useContractPod";
import { Select, Spacer, TransactionStatus } from "@components";
import { customStyles } from "./selectStyles.ts";

// Interface
interface IPodDepositToProps {
  className: string;
  children?: React.ReactNode;
  label: string;
  displayLabels: boolean;
  defaultValues: object;
}

/**
 * @name PodDepositTo
 * @description Execute PodDepositTo transaction
 * @return Component
 */
export const FormPodDepositToMultiple = ({
  label,
  defaultValues,
}: IPodDepositToProps) => {
  /* --- Component State --- */
  const { PodDAI, PodUSDC, PodCOMP, PodUNI } = useGetAllPodAddress();

  /* --- Form State --- */
  const { handleSubmit, register, control, watch } = useForm({
    defaultValues,
  });
  const FORM_VALUES = watch();

  /* --- Blockchain State --- */
  const [send, state] = usePodContractFunction(
    idx(FORM_VALUES, (_) => _.pod.value),
    "drop"
  );

  /* --- Submit Handler --- */
  const onSubmit = async (values) => {
    console.log(PodDAI, "PodDAI");
    send(true);
  };

  console.log(state, "statestate");

  /* --- Form Component --- */
  return (
    <>
      <form
        className={"form-default text-gray-600"}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-8 ml-0 text-gray-600">
          <Select
            name="pod"
            className="h-50"
            placeholder="Token"
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
        <Spacer className="my-2" />
        <button type="submit" className="btn btn-purple w-full">
          {label}
        </button>
      </form>
      <div className="text-center">
        <TransactionStatus
          state={state}
          miningLabel="Transaction Broadcast"
          sucessLabel="Transaction Success"
          classNameMining="tag-yellow my-2"
          classNameSuccess="tag-green my-2"
        />
      </div>
    </>
  );
};

FormPodDepositToMultiple.defaultProps = {
  className: "",
  label: "Batch Deposits Pod",
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
