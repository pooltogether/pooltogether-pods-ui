import idx from "idx";
import { useEffect, useState, useMemo } from "react";
import { useWeb3React } from "@web3-react/core";
import {
  transformTokenToHuman,
  numberTrimDecimals,
  commifyTokenBalance,
} from "../../../helpers/blockchain";
import { useContractERC20 } from "../../../hooks/useContractERC20";

/**
 * @name ERC20TotalSupply
 * @param {Object} props
 */
export const ERC20TotalSupply = ({
  address,
  className,
  decimals,
  decimalsTrim,
  defaultValue,
  ...props
}) => {
  const erc20Contract = useContractERC20(address);

  const { data, isSuccess } = erc20Contract.totalSupply();
  return useMemo(() => {
    if (data && isSuccess) {
      const dataFormatted = commifyTokenBalance(data.toString());
      return <span className={className}>{dataFormatted}</span>;
    } else {
      return <span className={className}>{defaultValue}</span>;
    }
  }, [data]);
};
export default ERC20TotalSupply;

ERC20TotalSupply.defaultProps = {
  balance: "0",
  decimals: 18,
  decimalsTrim: 4,
  defaultValue: "0.00",
};
