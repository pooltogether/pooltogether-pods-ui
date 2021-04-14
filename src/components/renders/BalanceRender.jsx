/* --- Global Modules  --- */
import { BigNumber } from "ethers";

/* --- Local Modules  --- */
import { commifyTokenBalance } from "@helpers/blockchain";

/**
 * @name BalanceRender
 * @param {Object} props
 */
export const BalanceRender = ({
  className,
  data,
  decimals,
  decimalPoints,
  ...props
}) => {
  return !data ? null : (
    <span className={className} {...props}>
      <span {...props}>
        {commifyTokenBalance(data, decimals, decimalPoints)}
      </span>
    </span>
  );
};

export default BalanceRender;

BalanceRender.defaultProps = {
  className: "",
  data: BigNumber.from(0),
  decimals: 18,
  decimalPoints: 4,
};
