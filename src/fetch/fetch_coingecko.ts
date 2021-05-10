
/* --- Global Modules --- */
import axios from "axios";

/* --- Contstants --- */
import { isAddress } from "@src/utils/is";

/* --- Contstants --- */
export const API_COINGECKO = axios.create({ baseURL: "https://api.coingecko.com/api/v3/" });

/**
 * @name fetchCoinGeckoTokenPrice
 * @param address 
 * @returns Token Price
 */
export const fetchCoinGeckoTokenPrice = async (address: String, params: Object = {}) => {
  try {
    if(isAddress(address)) {
      const { data, status } = await API_COINGECKO.get("simple/token_price/ethereum", {
        params: {
          contract_addresses: address,
          vs_currencies: "usd",
          ...params,
        },
      });

      if(status != 200) throw new Error('CoinGecko|TokenPrice - Invalid Response')

      // Return Price as Number
      return Object.values(data)[0].usd;
    }
    throw new Error('CoinGecko|TokenPrice - Invalid Address')
  } catch (error) {
    throw error
  }
}