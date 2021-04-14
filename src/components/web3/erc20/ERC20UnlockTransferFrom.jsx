/* --- Global --- */
import idx from "idx";
import { PropTypes } from "prop-types";
import { utils, constants, BigNumber } from "ethers";

/* --- Local Modules --- */
import {
  transformTokenToHuman,
  numberTrimDecimals,
} from "../../../helpers/blockchain";
import { useEffect, useMemo, useState } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  useERC20ContractFunction,
  useERC20ContractCall,
} from "@hooks/useContractERC20";
import { useEthers } from "@usedapp/core";

const ERROR_MESSAGE_BITS_96 =
  "VM Exception while processing transaction: revert Uni::approve: amount exceeds 96 bits";

/**
 * @name ERC20UnlockTransferFrom
 * @param {Object} props
 */
export const ERC20UnlockTransferFrom = ({
  address,
  allowanceOf,
  label,
  children,
}) => {
  const { account } = useEthers();
  const [allowanceStatusPrev, allowanceStatusPrevSet] = useState(0);
  const [allowanceStatus, allowanceStatusSet] = useState(0);
  const infiniteApproveAmount = constants.MaxUint256;

  const [amountToApprove, amountToApproveSet] = useState();

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const [send, state] = useERC20ContractFunction(address, "approve");

  // address, methods = [], inputs = []
  const [balanceOfAccount] = useERC20ContractCall(address, "balanceOf", [
    account,
  ]);

  const [allowanceOfPod] = useERC20ContractCall(address, "allowance", [
    account,
    allowanceOf,
  ]);

  /* ----------------------- */
  /* --- Component Hooks --- */
  /* ----------------------- */
  // Compare Balance/Allowance : Effect
  useEffect(() => {
    if (
      BigNumber.isBigNumber(allowanceOfPod) &&
      BigNumber.isBigNumber(balanceOfAccount)
    ) {
      if (balanceOfAccount.gt("0")) {
        if (allowanceOfPod.gt("0")) {
          if (allowanceOfPod.lt(balanceOfAccount)) allowanceStatusSet(2);
          if (allowanceOfPod.gte(balanceOfAccount)) allowanceStatusSet(4);
        } else {
          if (allowanceOfPod.lt(balanceOfAccount)) allowanceStatusSet(0);
        }
      } else {
        // ZERO Balance : Display Empty Balance
        allowanceStatusSet(3);
      }
    }
    // return () => allowanceStatusSet(0);
  }, [balanceOfAccount, allowanceOfPod]);

  // Compare Balance/Allowance : Memo
  const allowanceFormatted = useMemo(() => {
    if (allowanceOfPod && allowanceOfPod.gt("0")) {
      return numberTrimDecimals(transformTokenToHuman(allowanceOfPod));
    }
  }, [allowanceOfPod]);

  // Handle Approve ERROR (UNI, COMP, etc..) : Effect
  useEffect(() => {
    if (status.errorMessage) {
      console.log(status, "status.status.");
      send(allowanceOf, amountToApprove);
    }
  }, [status]);

  /* -------------------------- */
  /* --- Component Handlers --- */
  /* -------------------------- */
  const handleToggleProp = () => {
    allowanceStatusSet(1);
  };

  const handleIncreaseAllowance = () => {
    allowanceStatusPrevSet(allowanceStatus);
    allowanceStatusSet(1);
  };

  const handleApproveAction = async (amount) => {
    console.log("SENDING");
    send(allowanceOf, amount);
  };

  const handleCancel = () => {
    allowanceStatusPrevSet(allowanceStatus);
    allowanceStatusSet(allowanceStatusPrev);
  };

  /* ------------------------------ */
  /* --- Component Render State --- */
  /* ------------------------------ */
  if (allowanceStatus === 0) {
    return (
      <button
        type="button"
        className="btn-purple w-full"
        onClick={handleToggleProp}
      >
        {label}
      </button>
    );
  }

  if (allowanceStatus === 1)
    return (
      <>
        <div className="flex justify-between">
          <button
            type="button"
            className="btn-teal w-1/2"
            onClick={() => handleApproveAction(balanceOfAccount)}
          >
            Unlock Balance
          </button>
          <button
            type="button"
            className="btn-purple w-1/2 ml-3"
            onClick={() => handleApproveAction(infiniteApproveAmount)}
          >
            Infinite Unlock
          </button>
          <span
            onClick={handleCancel}
            className="cursor-pointer flex flex-col flex-center ml-1 px-4 tag-blue rounded-lg"
          >
            <img src="/images/close.svg" width={14} height="auto" />
          </span>
          <div className="text-right self-start mt-2"></div>
        </div>
      </>
    );

  if (allowanceStatus === 2) {
    return (
      <>
        <div className="flex-1">{children}</div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-gray-500">
            <strong>Allowance: </strong>
            {allowanceFormatted}
          </span>
          <span className="tag-green" onClick={handleIncreaseAllowance}>
            Increase Allowance
          </span>
        </div>
      </>
    );
  }

  if (allowanceStatus === 3) {
    return (
      <button type="button" className="btn-gray w-full">
        0.00 Balance
      </button>
    );
  }

  if (allowanceStatus === 4) {
    return children;
  }
  return null;
};

ERC20UnlockTransferFrom.defaultProps = {
  label: "Unlock Token 🔐",
};
ERC20UnlockTransferFrom.propTypes = {
  label: PropTypes.string,
};

export default ERC20UnlockTransferFrom;
