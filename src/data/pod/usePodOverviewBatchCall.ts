/* --- Global Modules --- */
import { useEffect } from "react";
import { useQuery } from "react-query";
import { useEthers } from "@usedapp/core";
import { batch } from '@pooltogether/etherplex'

/* --- Local Modules --- */
import {
  PodBatchContract,
} from "@hooks/batch";

import {  PodDataConfig } from '@src/interfaces/pod'

/**
 * @name usePodOverviewBatchCall
 * @param config 
 */
export const usePodOverviewBatchCall = (config: PodDataConfig) => {
  const { account, library } = useEthers();
  const {
    pod,
  } = config;

  const query = useQuery([pod], async () => {
    try {
      let results = await batch(
        library,
          PodBatchContract(pod)
          .totalSupply()
          .getPricePerShare()
          // .vaultTokenBalance()
          // .vaultTicketBalance()
          .balanceOf(account)
          .balance(),
          // PrizePoolFaucetBatchContract('Faucet', faucet)
          // .dripRatePerSecond(),
          // PrizePoolBatchContract(prizePool)
          // .accountedBalance()
          // .tokens(),
      )
      return results
    } catch (error) {
      console.log(error, 'ERRROR')
      throw error
    }
  })

  useEffect( () => { 
    if(!query.data && library) query.refetch()
  }, [library])
  
  return query
};
