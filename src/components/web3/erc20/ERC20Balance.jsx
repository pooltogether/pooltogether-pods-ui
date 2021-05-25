/* --- Global Modules --- */
import { useMemo } from "react";

/* --- Local Modules --- */
import { commifyTokenBalance } from "@helpers/blockchain";
import { useERC20ContractCall } from "@hooks/useContractERC20";
import { isAddress } from "@src/utils/is";

/**
 * @name ERC20Balance
 * @param {Object} props
 */
export const ERC20Balance = ({
  className,
  address,
  account,
  defaultValue,
  decimalsTrim,
  ...props
}) => {
  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  if (isAddress(address) && isAddress(account)) {
    return (
      <ERC20BalanceFetch
        address={address}
        account={account}
        className={className}
      />
    );
  } else {
    return <span className={className}>{defaultValue}</span>;
  }
};

export default ERC20Balance;

ERC20Balance.defaultProps = {
  balance: "0",
  defaultValue: "0.00",
  decimals: 18,
  decimalsTrim: 2,
};

const ERC20BalanceFetch = ({
  className,
  address,
  account,
  defaultValue,
  decimalsTrim,
  ...props
}) => {
  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const [decimals] = useERC20ContractCall(address, "decimals", []);
  const [balanceOf] = useERC20ContractCall(address, "balanceOf", [account]);

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return useMemo(() => {
    if (balanceOf && decimals) {
      return (
        <span className={className} {...props}>
          {commifyTokenBalance(balanceOf, decimals, decimalsTrim)}
        </span>
      );
    }
    return <span className={className}>{defaultValue}</span>;
  }, [balanceOf, decimals]);
};
