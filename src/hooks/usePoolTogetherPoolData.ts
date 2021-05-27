import { useQuery } from "react-query";
import { fetchPoolData } from '@src/api/api_pooltogether'
import { useEthers } from "@usedapp/core";

/**
 * @name usePoolTogetherPoolData
 * @param {String} poolAddress
 * @returns Aggregated Pool data
 */
 export const usePoolTogetherPoolData = (poolAddress: String) => {
  const {chainId} = useEthers()
  return useQuery([poolAddress] || 'pool-fetch', () => fetchPoolData(poolAddress, chainId == 1337 ? 1 : chainId ))
 }
