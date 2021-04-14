/* --- Global Modules --- */
import {
  useContractCall,
  useContractCalls,
  useContractFunction,
} from "@usedapp/core";

/* --- Local Modules --- */
import { ERC20Interface } from "@constants";
import { useGetERC20Contract } from "@hooks/contracts";

/**
 * @name useERC20ContractCall
 * @param {Object} props
 */
export const useERC20ContractCall = (address, method, inputs = []) => {
  const [value] =
    useContractCall(
      address && {
        abi: ERC20Interface,
        address: address,
        method: method,
        args: inputs,
      }
    ) ?? [];

  return [value];
};

/**
 * @name useERC20ContractCalls
 * @param {Object} props
 */
export const useERC20ContractCalls = (address, methods = [], inputs = []) => {
  const calls = methods.map((method, index) => ({
    abi: ERC20Interface,
    address: address,
    method: method,
    args: inputs[index],
  }));

  console.log(address, inputs, calls, "addressUSECONtractCALLS");
  const values = useContractCalls(address && calls && calls) ?? [];
  console.log(values, "valuesvalues");

  return Array.isArray(values)
    ? values.map((value) => Array.isArray(value) && value[0])
    : [];
};

/**
 * @name useERC20ContractFunction
 * @param {Object} props
 */
export const useERC20ContractFunction = (address, method) => {
  const { send, state } =
    useContractFunction(useGetERC20Contract(address), method) ?? [];
  return [send, state];
};
