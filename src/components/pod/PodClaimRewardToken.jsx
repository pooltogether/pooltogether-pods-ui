/* --- Global Modules --- */
import { useEffect, useMemo } from "react";
import { useEthers } from "@usedapp/core";

/* --- Local Modules --- */
import {
  usePodContractCall,
  usePodContractFunction,
} from "@hooks/useContractPod";
import {
  useContractTokenDropCall,
  useContractTokenDropFunction,
} from "@hooks/useContractTokenDrop";
import { TokenBalance } from "@src/components";

/**
 * @name PodClaimRewardToken
 * @param {Object} props
 */
export const PodClaimRewardToken = ({
  className,
  address,
  addressTokenDrop,
  decimals,
  label,
  ...props
}) => {
  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers();
  const [
    claimExecute,
    claimState,
  ] = useContractTokenDropFunction(addressTokenDrop, "claim", [account]);

  const handleClaimRewardToken = () => {
    claimExecute(account);
  };

  // TODO - Add Toast to track to Transaction Status
  useEffect(() => {}, [claimState]);

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return (
    <button
      className="btn btn-teal tag-teal bg-teal-700 text-white"
      onClick={handleClaimRewardToken}
    >
      {label}
    </button>
  );
};

PodClaimRewardToken.defaultProps = {
  address: undefined,
  decimals: 18,
  label: "Claim POOL",
};

export default PodClaimRewardToken;
