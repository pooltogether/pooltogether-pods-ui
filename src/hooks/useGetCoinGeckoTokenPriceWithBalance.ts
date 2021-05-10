/* --- Global Modules --- */
import { useEffect, useState } from "react";
import { useEthers } from "@usedapp/core";
import { BigNumber, constants } from "ethers";

/* --- Local Modules --- */
import { isAddress } from "@src/data/checks";
import { tokenPriceAndBalance } from '@src/utils/calculations/tokenPriceAndBalance'
import { fetchCoinGeckoTokenPrice } from '@src/fetch/fetch_coingecko'
import { useERC20ContractCall } from '@hooks/useContractERC20'
import { convertNumberToBigNumber } from '@src/utils/convert'
import { commifyTokenBalance } from "@src/helpers/blockchain";

/* ------------------------------- */
/* --------- File Module --------- */
/* ------------------------------- */
/**
 * @name useGetCoinGeckoTokenPriceWithBalance
 * @param token 
 * @returns {Object} balance value and token price 
 */
export const useGetCoinGeckoTokenPriceWithBalance = (token: string | undefined) => {
  const {account} = useEthers()
  const [value, valueSet] = useState();
  const [price, priceSet] = useState(0.00);
  const balance = useERC20ContractCall(token, 'balanceOf', [account ||constants.AddressZero ])

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

  useEffect( () => { 
    if(price && balance[0] && !value) {
      const tokenBalanceValueUsd = tokenPriceAndBalance(convertNumberToBigNumber(price, 2), balance[0])
      // @ts-ignore: Manual Type Check
      valueSet(commifyTokenBalance(tokenBalanceValueUsd, 18, 2))
    }
  }, [price, balance])

  return  {
    balance: balance[0] ? balance[0] : BigNumber.from('0'),
    value: value,
    price,
  };
};
