/* --- Global Modules --- */
import idx from "idx";
import { useEthers } from "@usedapp/core";
import { useMemo } from "react";

/* --- Local Modules --- */
import contracts from "@constants/contracts";
import { DEFAULT_NETWORK_READ } from "@constants/config";

/**
 * @name useGetContractAddress
 * @param {String} name
 * @description Get contract addresses for connected network.
 */
export const useGetContractAddress = (name) => {
  const { chainId } = useEthers();
  return useMemo(() => {
    if (!chainId) {
      return idx(contracts, (_) => _[DEFAULT_NETWORK_READ][name]);
    } else {
      return idx(contracts, (_) => _[chainId][name]);
    }
  }, [chainId]);
};
