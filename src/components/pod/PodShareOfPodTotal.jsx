/* --- Global Modules --- */
import { useMemo, useState, useEffect } from "react";
import { useEthers } from "@usedapp/core";

/* --- Local Modules --- */
import { isBigNumber, isPositiveBigNumber } from "@src/utils/is";
import { usePodContractCall } from "@hooks/useContractPod";

/**
 * @name PodShareOfPodTotal
 * @param {Object} props
 */
export const PodShareOfPodTotal = ({
  className,
  address,
  decimals,
  ...props
}) => {
  const [percentageCalculated, percentageCalculatedSet] = useState("0");

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers();
  const [balanceOf] = usePodContractCall(address, "balanceOf", [account]);
  const [totalSupply] = usePodContractCall(address, "totalSupply", []);

  useEffect(() => {
    if (
      isBigNumber(balanceOf) &&
      isBigNumber(totalSupply) &&
      isPositiveBigNumber(totalSupply)
    ) {
      const percentage = balanceOf.mul(100).div(totalSupply);
      percentageCalculatedSet(percentage.toString());
    }
  }, [balanceOf, totalSupply]);

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return useMemo(() => {
    return <span className={className}>{percentageCalculated}%</span>;
  }, [percentageCalculated]);
};

PodShareOfPodTotal.defaultProps = {
  address: undefined,
  decimals: 18,
};

export default PodShareOfPodTotal;
