
/* --- Global Modules --- */
import axios from "axios";

/* --- Contstants --- */
export const API_POOLTOGETHER = axios.create({ baseURL: "https://pooltogether-api.com/" });

/**
 * @name fetchPoolData
 * @param poolAddress 
 * @returns Aggreated Pool Data 
 */
export const fetchPoolData = async (poolAddress: String, chainId: number | string = 1)=> {
  try {
     const res = await API_POOLTOGETHER.get(`pools/${chainId}/${poolAddress}.json`)
     return res.data
  } catch (error) {
    throw error
  }
}