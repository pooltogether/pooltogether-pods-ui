/* --- Global Modules --- */
import idx from "idx";
import { utils } from "ethers";
import { useMemo } from "react";
import { BigNumber } from "@ethersproject/bignumber";

/* --- Local Modules --- */
import { useGetTokenPrice } from "@src/hooks/useCoinGecko";
import { useGetContractAddress } from "@hooks/useGetContractAddress";

/* --------------------------- */
/* ------- File Module ------- */
/* --------------------------- */

/**
 * @name useGetPoolTokenPriceAsBigNumber
 * @returns 
 */
export const useGetPoolTokenPriceAsBigNumber = () => {
  const ERC20Pool = useGetContractAddress("ERC20POOL");
  const price = useGetTokenPrice(ERC20Pool);

  // Calculate 
  return useMemo(() => {
    return idx(price, (_) => _.usd)
      ? utils.parseUnits(String(price.usd), 2)
      : BigNumber.from(0);
  }, [price]);
};