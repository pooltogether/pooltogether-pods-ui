/* --- Global Modules --- */
import {
  useContractCall,
  useContractCalls,
  useContractFunction,
} from "@usedapp/core";

/* --- Local Modules --- */
import { PrizePoolFaucetInterface } from "@constants";
import { useGetPrizePoolFaucet } from "@hooks/contracts";

/**
 * @name usePrizePoolFaucetCall
 * @param {Object} props
 */
export const usePrizePoolFaucetCall = (address, method, inputs = []) => {
  const [value] =
    useContractCall(
      address && {
        abi: PrizePoolFaucetInterface,
        address: address,
        method: method,
        args: inputs,
      }
    ) ?? [];

  return [value];
};

/**
 * @name usePrizePoolFaucetCalls
 * @param {Object} props
 */
export const usePrizePoolFaucetCalls = (address, methods = [], inputs = []) => {
  const calls = methods.map((method, index) => ({
    abi: PrizePoolFaucetInterface,
    address: address,
    method: method,
    args: inputs[index],
  }));

  const values = useContractCalls(address && calls && calls) ?? [];

  return Array.isArray(values)
    ? values.map((value) => Array.isArray(value) && value[0])
    : [];
};

/**
 * @name usePrizePoolFaucetFunction
 * @param {Object} props
 */
export const usePrizePoolFaucetFunction = (address, method) => {
  const { send, state } =
    useContractFunction(useGetPrizePoolFaucet(address), method) ?? [];
  return [send, state];
};
