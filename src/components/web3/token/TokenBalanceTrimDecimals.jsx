import { useMemo } from "react";
import { numberTrimDecimals } from "@helpers/blockchain";
/**
 * @name TokenBalanceTrimDecimals
 * @param {Object} props
 */
export const TokenBalanceTrimDecimals = ({
  balance,
  decimals,
  className,
  ...props
}) => {
  return useMemo(() => {
    return (
      <span className={className}>{numberTrimDecimals(balance, decimals)}</span>
    );
  }, [balance]);
};
export default TokenBalanceTrimDecimals;

TokenBalanceTrimDecimals.defaultProps = {
  balance: "0",
  decimals: 4,
  // className: {},
};
