import idx from "idx";
import { utils } from "ethers";
import { useMemo } from "react";
import { BigNumber, FixedNumber } from "@ethersproject/bignumber";
import { useGetContractAddress } from "@hooks/useGetContractAddress";
import { useGetTokenPrice } from "@src/hooks/useCoinGecko";

export const getPrizePoolTotalDeposits = () => {};

export const useGetPOOLUSDPrice = () => {
  const ERC20Pool = useGetContractAddress("ERC20POOL");
  const price = useGetTokenPrice(ERC20Pool);
  return useMemo(() => {
    return idx(price, (_) => _.usd)
      ? utils.parseUnits(String(price.usd), 2)
      : BigNumber.from(0);
  }, [price]);
};

export const useGetTokenUSDPrice = (token) => {
  const price = useGetTokenPrice(token);
  return useMemo(() => {
    return idx(price, (_) => _.usd)
      ? utils.parseUnits(String(price.usd), 2)
      : BigNumber.from(0);
  }, [price]);
};
