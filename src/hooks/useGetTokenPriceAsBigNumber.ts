/* --- Global Modules --- */
import idx from "idx";
import { utils } from "ethers";
import { useMemo } from "react";
import { BigNumber } from "@ethersproject/bignumber";

/* --- Local Modules --- */
import { useGetTokenPrice } from "@src/hooks/useCoinGecko";
import { useGetContractAddress } from "@hooks/useGetContractAddress";

/* ------------------------------- */
/* ------- File Interfaces ------- */
/* ------------------------------- */
interface Price {
  usd: Number
}
/* ------------------------------- */
/* --------- File Module --------- */
/* ------------------------------- */

/**
 * @name useGetTokenPriceAsBigNumber
 * @returns 
 */
export const useGetTokenPriceAsBigNumber = (token: String) => {
  const price = useGetTokenPrice(token)


  return useMemo(() => {
    return idx(price, (_) => _.usd)
      ? utils.parseUnits(String(price.usd), 2)
      : BigNumber.from(0);
  }, [price]);
};