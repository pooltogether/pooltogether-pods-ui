import { useQuery } from "react-query";
import { fetchPoolData } from '@src/api/api_pooltogether'

/**
 * @name usePoolTogetherAPIPoolData
 * @param {String} poolAddress
 * @returns Aggregated Pool data.
 */
 export const usePoolTogetherAPIPoolData = (poolAddress: String) => {
    return useQuery([poolAddress] || 'pool-fetch', () => fetchPoolData(poolAddress))
 }
