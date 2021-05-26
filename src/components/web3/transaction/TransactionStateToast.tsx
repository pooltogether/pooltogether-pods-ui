/* --- Global Modules --- */
import { useEffect, useMemo } from "react";
import { toast } from "react-toastify";

/* --- Local Modules --- */
import {
  ToastTransactionSuccess,
  ToastTransactionRejected,
  ToastTransactionError,
} from "@src/components";

/* --- Component Interface --- */
export interface ITransactionState {
  chainId: string;
  errorMessage: string;
  status: string;
  transaction: {
    hash: string;
    nonce: string;
    chainId: string;
    from: string;
  };
  receipt: {
    blockHash: string;
    blockNumber: string;
    status: string;
    to: string;
    value: object;
    events: Array<object>;
  };
}
export interface ITransactionStateToast {
  state: ITransactionState;
}

const ACTION_SUCCESS = "Success";
const ACTION_FAILURE = "Failure";
const ACTION_USER_REJECTED =
  "MetaMask Tx Signature: User denied transaction signature.";
const ACTION_INVALID_ENS = "invalid ENS name";

/**
 * @name TransactionStateToast
 * @param {Object} props
 */
export const TransactionStateToast = (state: ITransactionStateToast) => {
  const toastConfig = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  useEffect(() => {
    if (state.errorMessage) {
      console.log(state.errorMessage, "state.errorMessage");
      switch (state.errorMessage) {
        case ACTION_USER_REJECTED:
          toast.warning(<ToastTransactionRejected />, toastConfig);
          break;
        case ACTION_INVALID_ENS:
          toast.error(<ToastTransactionError />, toastConfig);
          break;

        default:
          break;
      }
    }

    if (state.status) {
      switch (state.status) {
        case ACTION_SUCCESS:
          toast.success(
            <ToastTransactionSuccess
              label="Transaction Confirmed"
              blockHash={state.receipt.blockHash}
              value={state.transaction.value}
              to={state.receipt.to}
            />
          );
          break;

        default:
          break;
      }
    }

    // toast("New Message");
  }, [state]);

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return null;
};

TransactionStateToast.defaultProps = {
  address: undefined,
  decimals: 18,
};

export default TransactionStateToast;
