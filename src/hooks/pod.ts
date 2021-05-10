const POOL_TOKEN = "0x0cec1a9154ff802e7934fc916ed7ca50bde6844e";

/* --- Global Modules --- */
import { useQuery } from "react-query";
import { useEthers } from "@usedapp/core";
import { useEffect, useMemo, useState } from "react";
import { BigNumber } from "@ethersproject/bignumber";
import { batch, contract } from '@pooltogether/etherplex'

/* --- Local Modules --- */
import { useCoinGecko } from "./useCoinGecko";
import { useBatchCall } from "@hooks/batch";
import { transformTokenToHuman } from "@src/helpers/blockchain";

// Contracts
import { usePodContractCall } from "@hooks/useContractPod";
import { useERC20ContractCall } from "@hooks/useContractERC20";
import { usePrizePoolFaucetCall } from "@hooks/useContractPrizePoolFaucet";
import {
  PodBatchContract,
  ERC20BatchContract,
  PrizePoolBatchContract,
  PrizePoolStrategyBatchContract,
  PrizePoolFaucetBatchContract
} from "@hooks/batch";

import { PrizePoolTokens, PodDataConfig } from '@src/interfaces/pod'


/**
 * @name useGetPodStaticData
 * @param config 
 */
export const useGetPodStaticData = (config: PodDataConfig = {}) => {
  const { library } = useEthers();
  const {
    addressPod,
    addressPodPP,
    addressPodPPFaucet,
    addressPodPPTicket,
    addressPodPPTicketSponsored,
    addressPodPPStrategy,
  } = config;

  const TIME_NOW  = Number.parseFloat(Date.now() / 1000).toFixed(0)

  const query = useQuery({...config, library}.toString(), async () => {
    try {
      let results = await batch(
        library,
          PrizePoolFaucetBatchContract('Faucet', addressPodPPFaucet)
          .dripRatePerSecond(),
          PodBatchContract(addressPod)
          .totalSupply()
          .getPricePerShare()
          .vaultTokenBalance()
          .vaultTicketBalance()
          .vaultPoolBalance()
          .balance(),
          PrizePoolBatchContract(addressPodPP)
          .accountedBalance()
          .tokens(),
          PrizePoolStrategyBatchContract(
            `Strategy`,
            addressPodPPStrategy
          ).calculateNextPrizePeriodStartTime(
            TIME_NOW
          ),
          ERC20BatchContract("pcToken", addressPodPPTicket)
          .totalSupply(),
          ERC20BatchContract("pcsToken", addressPodPPTicketSponsored)
          .totalSupply()
      )
      return results
    } catch (error) {
      console.log(error, 'error')
      throw error
    }
  })

  useEffect( () => { 
    if(!query.data && library) query.refetch()
  }, [library])
  
  return query
};

const refetchOnChange = (value, query) => {

  useEffect(() => {
    if(value) query.refetch()
  },[value, query])
}





export const useGetPodNextReward = (config = {}) => {
  const { token, totalSupply } = config;
  const coingecko = useCoinGecko();

  useMemo(() => {
    (async () => {
      const tokenPrice = await coingecko.tokenPrice(token);
    })();
  }, [token]);

  return useMemo(() => {}, []);
};

/**
 * @name useGetPodPoolAPR
 * @param {*} config
 * @returns
 */
export const useGetPodPoolAPR = (config) => {
  // Configuration
  const {
    addressPrizePool,
    addressFaucet,
    addressToken,
    addressTicket,
    addressTicketSponsored,
  } = config;

  // Constants
  const SECONDS_IN_1_days = "86400";
  const SECONDS_IN_7_days = "604800";

  // State
  const [prizePoolTokenPrice, prizePoolTokenPriceSet] = useState();
  const [poolTokenPrice, poolTokenPriceSet] = useState();
  const [prizePoolApy, prizePoolApySet] = useState({});

  // Hooks
  const coingecko = useCoinGecko();

  /* ---------------------- */
  /* --- Contract Calls --- */
  /* ---------------------- */
  // POOL Drip Rate
  const dripRatePerSecond = usePrizePoolFaucetCall(
    addressFaucet,
    "dripRatePerSecond"
  );

  /* -------------------- */
  /* --- Custom Hooks --- */
  /* -------------------- */
  useEffect(() => {
    if (addressToken) {
      (async () => {
        const tokenPriceToken = await coingecko.tokenPrice(addressToken);
        const tokenPrice = await coingecko.tokenPrice(POOL_TOKEN);
        poolTokenPriceSet(tokenPrice.usd);
        prizePoolTokenPriceSet(tokenPriceToken.usd);
      })();
    }
  }, [addressToken]);

  useEffect(() => {
    if (poolTokenPrice && dripRatePerSecond[0]) {
      // Calculate POOL/Time
      const poolPerDay = dripRatePerSecond[0].mul(SECONDS_IN_1_days);
      const poolPerWeek = dripRatePerSecond[0].mul(SECONDS_IN_7_days);
      const poolPerYear = dripRatePerSecond[0].mul(SECONDS_IN_1_days).mul(365);

      // Calculate Time based POOL Drip
      const poolPerDayFormatted = transformTokenToHuman(poolPerDay);
      const poolPerWeekFormatted = transformTokenToHuman(poolPerWeek);
      const poolPerYearFormatted = transformTokenToHuman(poolPerYear);

      // USD Value Return
      // TODO Better handling for numbers
      const valuePerDay = poolPerDayFormatted * poolTokenPrice;
      const valuePerWeek = poolPerWeekFormatted * poolTokenPrice;
      const valuePerYear = poolPerYearFormatted * poolTokenPrice;

      prizePoolApySet({
        day: valuePerDay,
        week: valuePerWeek,
        year: valuePerYear,
      });
    }
  }, [poolTokenPrice, dripRatePerSecond]);

  return prizePoolApy;
};

/**
 * @name useGetPodPoolUserAPR
 * @param {*} config
 * @returns
 */
export const useGetPodPoolUserAPR = (config) => {
  // Configuration
  const { addressTicket, addressTicketSponsored } = config;
  // const podPrizePoolAPY = useGetPodPoolAPR({ addressFaucet, addressToken });
};

/**
 * @name useGetPodPrizePoolTotalSupply
 * @description Get the PrizePool total token deposits.
 * @param {*} config
 * @returns
 */
export const useGetPodPrizePoolTotalSupply = (config) => {
  const { addressTicket, addressTicketSponsored } = config;

  const ticketTotalSupply = useERC20ContractCall(addressTicket, "totalSupply");
  const ticketSponsoredTotalSupply = useERC20ContractCall(
    addressTicketSponsored,
    "totalSupply"
  );

  return useMemo(() => {
    if (ticketTotalSupply[0] && ticketSponsoredTotalSupply[0]) {
      return ticketTotalSupply[0].add(ticketSponsoredTotalSupply[0]);
    }
    return BigNumber.from("0");
  }, [ticketTotalSupply, ticketSponsoredTotalSupply]);
};

const useGetTokenPrice = () => {};

/**
 * @name useGetPodPOOlAPY
 * @description Get the PrizePool total token deposits.
 * @param {*} config
 * @returns
 */
export const useGetPodPOOLAPY = (config) => {
  const tokenTotalSupply = useGetPodPrizePoolTotalSupply(
    config.addressTicket,
    config.addressTicketSponsored
  );

  const poolTokenPrice = useGetTokenPrice(POOL_TOKEN);
  const prizePoolTokenPrice = useGetTokenPrice(config.tokenAddress);
  const podPrizePoolPOOLAPR = useGetPodPoolAPR(config);

  const results = useMemo(() => {
    console.log(poolTokenPrice, "poolTokenPrice");
    console.log(prizePoolTokenPrice, "prizePoolTokenPrice");
    console.log(tokenTotalSupply, "tokenTotalSupplytokenTotalSupply");
    if (
      (BigNumber.isBigNumber(tokenTotalSupply),
      poolTokenPrice,
      prizePoolTokenPrice,
      podPrizePoolPOOLAPR)
    ) {
      // const ppT = BigNumber.from(Number(prizePoolTokenPrice).toFixed(0));
      // const depositedTokenValue = tokenTotalSupply.mul(ppT);
      // const daily = podPrizePoolPOOLAPR.day.div(depositedTokenValue);
      // const weekly = podPrizePoolPOOLAPR.week.div(depositedTokenValue);
      // const yearly = podPrizePoolPOOLAPR.year.div(depositedTokenValue);
      // return {
      //   daily,
      //   weekly,
      //   yearly,
      // };
    }
    return BigNumber.from("0");
  }, [
    tokenTotalSupply,
    poolTokenPrice,
    prizePoolTokenPrice,
    podPrizePoolPOOLAPR,
  ]);

  console.log(results, "resultsresults");

  return results;
};
