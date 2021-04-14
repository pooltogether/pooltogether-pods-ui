/* --- Global Modules --- */
import { Contract } from "@ethersproject/contracts";
import { useEthers } from "@usedapp/core";

/* --- Local Modules --- */
import {
  ERC20Interface,
  PodInterface,
  PodManagerInterface,
  CompoundPrizePoolInterface,
} from "@constants/interfaces";

/**
 * @name useGetERC20Contract
 * @param {*} address
 */
export const useGetERC20Contract = (address) => {
  const { library } = useEthers();

  const contract =
    address && library
      ? new Contract(address, ERC20Interface, library)
      : undefined;

  return contract;
};

/**
 * @name useGetPodContract
 * @param {*} address
 */
export const useGetPodContract = (address) => {
  const { library } = useEthers();

  const contract =
    address && library
      ? new Contract(address, PodInterface, library)
      : undefined;

  return contract;
};

/**
 * @name useGetPodManagerContract
 * @param {*} address
 */
export const useGetPodManagerContract = (address) => {
  const { library } = useEthers();

  const contract =
    address && library
      ? new Contract(address, PodManagerInterface, library)
      : undefined;

  return contract;
};

/**
 * @name useGetCompoundPrizePoolContract
 * @param {*} address
 */
export const useGetCompoundPrizePoolContract = (address) => {
  const { library } = useEthers();

  const contract =
    address && library
      ? new Contract(address, CompoundPrizePoolInterface, library)
      : undefined;

  return contract;
};
