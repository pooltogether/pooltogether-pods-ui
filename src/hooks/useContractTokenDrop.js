/* --- Global Modules --- */
import {
  useContractCall,
  useContractCalls,
  useContractFunction,
} from "@usedapp/core";

/* --- Local Modules --- */
import { useGetTokenDropContract } from "@hooks/contracts";
import { isAddress } from "@src/utils/is";

const validateInputs = (inputs) => {
  let valid = true;
  Array.isArray(inputs) &&
    inputs.forEach((input) => {
      if (input == undefined || input == null) valid = false;
    });
  return valid;
};

/**
 * @name useContractTokenDropCall
 * @param {Object} props
 */
export const useContractTokenDropCall = (address, method, inputs = []) => {
  const [value] =
    useContractCall(
      address &&
        isAddress(address) &&
        validateInputs(inputs) && {
          abi: TokenDropInterface,
          address: address,
          method: method,
          args: inputs,
        }
    ) ?? [];

  return [value];
};

/**
 * @name useContractTokenDropFunction
 * @param {Object} props
 */
export const useContractTokenDropFunction = (address, method) => {
  const { send, state } =
    useContractFunction(useGetTokenDropContract(address), method) ?? [];
  return [send, state];
};

/**
 * @name useContractTokenDropFunctions
 * @param {Object} props
 */
export const useContractTokenDropCalls = (
  address,
  methods = [],
  inputs = []
) => {
  const calls = methods.map((method, index) => ({
    abi: TokenDropInterface,
    address: address,
    method: method,
    args: inputs[index],
  }));

  const values = useContractCalls(calls) ?? [];

  return Array.isArray(values)
    ? values.map((value) => Array.isArray(value) && value[0])
    : [];
};
