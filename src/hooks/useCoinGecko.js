import axios from 'axios'
import { useEffect, useMemo, useState } from 'react'
import { isAddress } from '@src/data/checks'
import { utils } from 'ethers'

export const useCoinGecko = () => {
  const api = useMemo(() => {
    return axios.create({ baseURL: 'https://api.coingecko.com/api/v3/' })
  }, [])

  /**
   * @name tokenPrice
   * @param {*} account
   * @param {*} config
   */
  const tokenPrice = async (token, additionalParams) => {
    if (token) {
      const tokenFormatted = utils.getAddress(token)
      const { data } = await api.get('simple/token_price/ethereum', {
        params: {
          contract_addresses: tokenFormatted,
          vs_currencies: 'usd',
          ...additionalParams
        }
      })
      return Object.values(data)[0]
    }
    return undefined
  }

  return {
    tokenPrice
  }
}

export const useGetTokenPrice = (token) => {
  const [price, priceSet] = useState()
  const coingecko = useCoinGecko()

  useEffect(() => {
    ;(async () => {
      if (isAddress(token)) {
        try {
          const price = await coingecko.tokenPrice(token)
          priceSet(price)
        } catch (error) {}
      }
    })()
  }, [token])

  return price
}
