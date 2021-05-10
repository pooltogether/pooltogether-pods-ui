/* --- Global Modules --- */
import {
  useContractCall,
  useContractCalls,
  useContractFunction,
} from "@usedapp/core";

/* --- Local Modules --- */
import { PrizePoolCompoundInterface } from "@constants/interfaces";
import { useGetPodContract } from "@hooks/contracts";

const validateInputs = (inputs) => {
  let valid = true;
  Array.isArray(inputs) &&
    inputs.forEach((input) => {
      if (input == undefined || input == null) valid = false;
    });
  return valid;
};

/**
 * @name usePrizePoolContractCall
 * @param {Object} props
 */
export const usePrizePoolContractCall = (address, method, inputs = []) => {
  const [value] =
    useContractCall(
      address &&
        validateInputs(inputs) && {
          abi: PodInterface,
          address: address,
          method: method,
          args: inputs,
        }
    ) ?? [];

  return [value];
};

/**
 * @name usePodContractFunction
 * @param {Object} props
 */
export const usePodContractFunction = (address, method) => {
  const { send, state } =
    useContractFunction(useGetPodContract(address), method) ?? [];
  return [send, state];
};

/**
 * @name usePodContractFunctions
 * @param {Object} props
 */
export const usePrizePoolContractCalls = (
  address,
  methods = [],
  inputs = []
) => {
  const calls = methods.map((method, index) => ({
    abi: PodInterface,
    address: address,
    method: method,
    args: inputs[index],
  }));

  const values = useContractCalls(calls) ?? [];

  return Array.isArray(values)
    ? values.map((value) => Array.isArray(value) && value[0])
    : [];
};
