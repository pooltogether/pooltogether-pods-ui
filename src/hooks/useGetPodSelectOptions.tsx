/* --- Global Modules --- */
import { useMemo } from "react";
import { useEthers } from "@usedapp/core";

/* --- Local Modules --- */
import { useGetAllPodAddress } from "./contractAddress";

/**
 * @name useGetPodSelectOptions
 * @returns
 */
export function useGetPodSelectOptions() {
  const { chainId } = useEthers();
  const { PodDAI, PodUSDC, PodCOMP, PodUNI, PodBAT } = useGetAllPodAddress();

  return useMemo(() => {
    switch (chainId) {
      case 1:
      case 1337:
        return [
          {
            value: PodDAI,
            label: "DAI",
            image: "/tokens/token-dai.png",
          },
          {
            value: PodUSDC,
            label: "USDC",
            image: "/tokens/token-usdc.png",
          },
          // {
          //   value: PodCOMP,
          //   label: "COMP",
          //   image: "/tokens/token-comp.png",
          // },
          // {
          //   value: PodUNI,
          //   label: "UNI",
          //   image: "/tokens/token-uni.png",
          // },
        ];
      case 4:
        return [
          {
            value: PodDAI,
            label: "DAI",
            image: "/tokens/token-dai.png",
          },
          {
            value: PodUSDC,
            label: "USDC",
            image: "/tokens/token-usdc.png",
          },
          // {
          //   value: PodBAT,
          //   label: "BAT",
          //   image: "/tokens/token-bat.svg",
          // },
        ];
      default:
        return [];
    }
  }, [chainId]);
}
