/* --- Global Modules --- */
import { useEffect, useState } from "react";

/* --- Local Modules --- */
import { isAddress } from "@src/data/checks";
import { fetchCoinGeckoTokenPrice } from '@src/fetch/fetch_coingecko'

/* ------------------------------- */
/* --------- File Module --------- */
/* ------------------------------- */

export const useGetCoinGeckoTokenPrice = (token: string | undefined) => {
  const [price, priceSet] = useState(0.00);

  useEffect(() => {
    (async () => {
      if (isAddress(token)) {
        try {
          // @ts-ignore: Manual Type Check
          const price = await fetchCoinGeckoTokenPrice(token);
          priceSet(price);
        } catch (error) {
          throw error;
        }
      }
    })();
  }, [token]);

  return price;
};
