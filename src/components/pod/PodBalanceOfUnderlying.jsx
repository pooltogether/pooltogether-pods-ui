/* --- Global Modules --- */
import { useMemo } from "react";
import { useEthers } from "@usedapp/core";

/* --- Local Modules --- */
import { usePodContractCall } from "@hooks/useContractPod";
import { TokenBalance } from "@src/components";

/**
 * @name PodBalanceOfUnderlying
 * @param {Object} props
 */
export const PodBalanceOfUnderlying = ({
  className,
  address,
  decimals,
  ...props
}) => {
  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers();

  const [balanceOfUnderyling] = usePodContractCall(
    address,
    "balanceOfUnderlying",
    [account]
  );

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return useMemo(() => {
    return (
      <TokenBalance
        className={className}
        balance={balanceOfUnderyling}
        decimals={decimals}
      />
    );
  }, [balanceOfUnderyling]);
};

PodBalanceOfUnderlying.defaultProps = {
  address: undefined,
  decimals: 18,
};

export default PodBalanceOfUnderlying;
