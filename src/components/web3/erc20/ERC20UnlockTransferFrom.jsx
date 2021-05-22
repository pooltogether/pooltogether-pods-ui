/* --- Global --- */
import idx from "idx";
import { PropTypes } from "prop-types";
import classnames from "classnames";
import { useEthers } from "@usedapp/core";
import { utils, constants, BigNumber } from "ethers";

/* --- Local Modules --- */
import {
  transformTokenToHuman,
  numberTrimDecimals,
} from "@src/helpers/blockchain";
import { useEffect, useMemo, useState } from "react";
import {
  useERC20ContractFunction,
  useERC20ContractCall,
} from "@hooks/useContractERC20";
import { Tooltip } from "@components";
/**
 * @name ERC20UnlockTransferFrom
 * @param {Object} props
 */
export const ERC20UnlockTransferFrom = ({
  className,
  classNameIncreaseAllowance,
  address,
  allowanceOf,
  label,
  children,
}) => {
  const { account } = useEthers();
  const [allowanceStatusPrev, allowanceStatusPrevSet] = useState(0);
  const [allowanceStatus, allowanceStatusSet] = useState(0);
  const [amountToApprove, amountToApproveSet] = useState();

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const [send, state] = useERC20ContractFunction(address, "approve");

  const [decimals] = useERC20ContractCall(address, "decimals");
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
  const [transactionStatusMessage, transactionStatusMessageSet] = useState();
  useEffect(() => {
    if (state.status == "Mining") {
      transactionStatusMessageSet("Enabling Pod Deposits");
    }

    if (state.status == "Success") {
      allowanceStatusSet(5);
      transactionStatusMessageSet("Pod Deposits Enabled");
    }
  }, [state]);

  // Compare Balance/Allowance : Effect
  useEffect(() => {
    if (
      BigNumber.isBigNumber(allowanceOfPod) &&
      BigNumber.isBigNumber(balanceOfAccount)
    ) {
      if (balanceOfAccount.gt("0")) {
        if (allowanceOfPod.gt("0")) {
          // Deposit Enabled (Allowance Below Balance)
          if (allowanceOfPod.lt(balanceOfAccount)) allowanceStatusSet(2);
          // Deposit Enabled (Allowance Above Balance)
          if (allowanceOfPod.gte(balanceOfAccount)) allowanceStatusSet(5);
        } else {
          // Deposit Disabled (Zero Allowance)
          if (allowanceOfPod.lt(balanceOfAccount)) allowanceStatusSet(1);
        }
      } else {
        // Deposit Disabled (Zero Balance)
        allowanceStatusSet(3);
      }
    }
  }, [balanceOfAccount, allowanceOfPod]);

  // Compare Balance/Allowance : Memo
  const allowanceFormatted = useMemo(() => {
    if (allowanceOfPod && allowanceOfPod.gt("0")) {
      return numberTrimDecimals(
        transformTokenToHuman(allowanceOfPod, decimals || 18)
      );
    }
  }, [allowanceOfPod, decimals]);

  useEffect(() => {
    if (status.errorMessage) {
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
    send(allowanceOf, amount);
  };
  const handleDisableAction = async (amount) => {
    send(allowanceOf, 0);
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
            className="btn-teal w-full"
            onClick={() => handleApproveAction(balanceOfAccount)}
          >
            Enable Pod Deposits
          </button>
          <div className="text-right self-start mt-2"></div>
        </div>
      </>
    );

  const classNameIncreaseAllowanceComposed = classnames(
    "flex items-center justify-between mt-3",
    classNameIncreaseAllowance
  );

  if (allowanceStatus === 2) {
    // return
    return (
      <div className="block">
        <div className="block w-full">{children}</div>
        <div className={classNameIncreaseAllowanceComposed}>
          <span className="">
            <strong>Allowance: </strong>
            {allowanceFormatted}
          </span>
          <span className="tag-green" onClick={handleIncreaseAllowance}>
            Increase Allowance
          </span>
        </div>
      </div>
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
    return (
      <button type="button" className="btn-green w-full">
        <span className="">{transactionStatusMessage}</span>
      </button>
    );
  }

  const classNameDecreaseAllowance = classnames(
    "flex justify-center items-center text-xs mt-1",
    classNameIncreaseAllowance
  );

  if (allowanceStatus === 5) {
    return (
      <div className="">
        <div className="">{children}</div>
        <div className={classNameDecreaseAllowance}>
          <span
            className="cursor-pointer mr-1 hover:text-blue-200"
            onClick={handleDisableAction}
          >
            Disable Deposits (Decrease Allowance)
          </span>{" "}
          <Tooltip>
            <DecreaseAllowanceTooltip />
          </Tooltip>
        </div>
      </div>
    );
  }
  return null;
};

ERC20UnlockTransferFrom.defaultProps = {
  label: "Unlock Token 🔐",
};
ERC20UnlockTransferFrom.propTypes = {
  label: PropTypes.string,
};

const DecreaseAllowanceTooltip = (props) => {
  return (
    <div className="card bg-purple-500 text-white max-w-sm ">
      <h4 className="text-xl border-bottom">
        Disable Pod Deposits (Decrease Allowance)
      </h4>
      <p className="text-xs">
        Disabling deposits prevents a Pod from transfering token's on your
        behalf. Effectively managing token allowances decreases smart contract
        risks by preventing the unintended spending of tokens in the unlikely
        scenario a hack or unintended side-effect occurs.
      </p>
    </div>
  );
};

export default ERC20UnlockTransferFrom;
