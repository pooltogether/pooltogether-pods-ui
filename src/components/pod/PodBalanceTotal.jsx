/* --- Global Modules --- */
import { useMemo } from "react";

/* --- Local Modules --- */
import { usePodContractCall } from "@hooks/useContractPod";
import { TokenBalance } from "@src/components";

/**
 * @name PodBalanceTotal
 * @param {Object} props
 */
export const PodBalanceTotal = ({ className, address, decimals, ...props }) => {
  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const [balance] = usePodContractCall(address, "balance", []);

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return useMemo(() => {
    return <TokenBalance className={className} balance={balance} />;
  }, [balance]);
};

PodBalanceTotal.defaultProps = {
  address: undefined,
  decimals: 18,
};

export default PodBalanceTotal;
