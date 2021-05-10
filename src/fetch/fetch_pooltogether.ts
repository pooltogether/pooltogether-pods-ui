
/* --- Global Modules --- */
import axios from "axios";

/* --- Contstants --- */
export const API_POOLTOGETHER = axios.create({ baseURL: "https://pooltogether-api.com/" });

/**
 * @name fetchPoolTogetherPoolData
 * @param address 
 * @returns Aggreated Pool Data 
 */
export const fetchPoolTogetherPoolData = async (address: String)=> {
  try {
     const res = await API_POOLTOGETHER.get(`pools/1/${address}.json`)
     return res.data
  } catch (error) {
    throw error
  }
}