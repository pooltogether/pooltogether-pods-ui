/* --- Global Modules --- */
import { useMemo } from "react";
import { useEthers } from "@usedapp/core";

/* --- Local Modules --- */
import { useGetAllPodAndTokenFaucetAddresses } from "./contractAddress";

/**
 * @name useGetPodTokenFaucetSelectOptions
 * @returns
 */
export function useGetPodAndTokenFaucetSelectOptions() {
  const { chainId } = useEthers();
  const { dai, usdc, comp, uni } = useGetAllPodAndTokenFaucetAddresses();

  return useMemo(() => {
    switch (chainId) {
      case 1:
      case 1337:
        return [
          {
            value: dai.pod,
            label: "DAI",
            image: "/tokens/token-dai.png",
            faucet: dai.faucet,
          },
          {
            value: usdc.pod,
            faucet: usdc.faucet,
            label: "USDC",
            image: "/tokens/token-usdc.png",
          },
          {
            value: comp.pod,
            faucet: comp.faucet,
            label: "COMP",
            image: "/tokens/token-comp.png",
          },
          {
            value: uni.pod,
            faucet: uni.faucet,
            label: "UNI",
            image: "/tokens/token-uni.png",
          },
        ];
      case 4:
        return [
          {
            value: dai.pod,
            label: "DAI",
            image: "/tokens/token-dai.png",
          },
          {
            value: usdc.pod,
            label: "USDC",
            image: "/tokens/token-usdc.png",
          },
        ];
      default:
        return [];
    }
  }, [chainId]);
}
