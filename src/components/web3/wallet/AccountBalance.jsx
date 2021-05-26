import { useEthers, useEtherBalance } from "@usedapp/core";
import { useMemo } from "react";

import { commifyTokenBalance } from "@src/utils/convert";

/**
 * @name
 * @param {Object} props
 */
export const AccountBalance = ({ className, ...props }) => {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);

  return useMemo(() => {
    if (!etherBalance) return null;
    return (
      <span className={className}>{commifyTokenBalance(etherBalance)}</span>
    );
  }, [etherBalance]);
};
export default AccountBalance;
