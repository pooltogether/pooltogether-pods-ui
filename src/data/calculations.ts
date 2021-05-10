import { useEffect, useMemo, useState } from "react";
import { BigNumber } from "@ethersproject/bignumber";
import { isAddress, isPositiveBigNumber } from './checks'
import { useMemoizeValue } from './helpers'
import { getPrizePoolTotalDeposits, useGetPOOLUSDPrice, useGetTokenUSDPrice } from './fetch'
import { useCoinGecko } from "@src/hooks/useCoinGecko";


/**
 * @name usePrizePoolDepositedValue
 * @param ticketTotalSupply 
 * @param ticketSponsoredTotalSupply 
 * @returns 
 */
export const usePrizePoolDepositedValue = (total: BigNumber, token: String): BigNumber => {
  const price = useGetTokenUSDPrice(token)
  return useMemo( () => { 
    if(isPositiveBigNumber(total) && isPositiveBigNumber(price)) {
        return total.mul(price).div(100)
      } else {
        return BigNumber.from(0)
      }
  }, [total, price])
};

/**
 * @name usePrizePoolDepositedValue
 * @param ticketTotalSupply 
 * @param ticketSponsoredTotalSupply 
 * @returns 
 */
 export const usePrizePoolTotalDeposits = (ticketTotalSupply: BigNumber, ticketSponsoredTotalSupply: BigNumber): BigNumber => {
  return useMemo( () => { 
    if(isPositiveBigNumber(ticketTotalSupply) && isPositiveBigNumber(ticketSponsoredTotalSupply)) {
        return ticketTotalSupply.add(ticketSponsoredTotalSupply)
      } else {
        return BigNumber.from(0)
      }
  }, [ticketTotalSupply, ticketSponsoredTotalSupply])
};

/**
 * @name usePrizePoolValuePerDay
 * @param ratePerSecond 
 * @returns 
 */
export const usePrizePoolValuePerDay = (ratePerSecond: BigNumber): BigNumber => {
  const price = useGetPOOLUSDPrice()
  return useMemo( () => {
    if(isPositiveBigNumber(price) && isPositiveBigNumber(ratePerSecond)) {
      return price.mul(ratePerSecond.mul(86400)).div(100)
    }
    return BigNumber.from(0)
  }, [price])
};


export const usePrizePoolAnnualizedReturns = (days: Number,  config = defaultConfig) => {
  const depositedValue = usePrizePoolDepositedValue();
  const returnsPerSecond = usePrizePoolValuePerDay();

  /* --- Hooks --- */

  const data = useMemo( () => {
    if(isPositiveBigNumber(depositedValue) && isPositiveBigNumber(returnsPerSecond))
    BigNumber.isBigNumber(days)
  
  }, [])


  return data

};

interface AnnualizeReturnsConfig {
  addressPod: String;
  addressPodPP: String;
  addressPodPPTokens: PrizePoolTokens;
  addressPodPPFaucet: String;
}

const defaultConfig: AnnualizeReturnsConfig = {
  addressPod: "",
  addressPodPP: "",
  addressPodPPTokens: "",
  addressPodPPFaucet: "",
};
