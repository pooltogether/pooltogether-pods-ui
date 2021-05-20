/* --- Global Modules --- */
import { useMemo } from "react";
import { useEthers } from "@usedapp/core";

/* --- Local Modules --- */
import { useGetAllPodAndTokenDropAddresses } from "./contractAddress";

/**
 * @name useGetPodTokenFaucetSelectOptions
 * @returns
 */
export function useGetPodAndTokenDropSelectOptions() {
  const { chainId } = useEthers();
  const { dai, usdc } = useGetAllPodAndTokenDropAddresses();

  return useMemo(() => {
    switch (chainId) {
      case 1:
      case 1337:
        return [
          {
            value: dai.pod,
            label: "DAI",
            image: "/tokens/token-dai.png",
            drop: dai.drop,
          },
          {
            value: usdc.pod,
            drop: usdc.drop,
            label: "USDC",
            image: "/tokens/token-usdc.png",
          },
          // {
          //   value: comp.pod,
          //   drop: comp.drop,
          //   label: "COMP",
          //   image: "/tokens/token-comp.png",
          // },
          // {
          //   value: uni.pod,
          //   drop: uni.drop,
          //   label: "UNI",
          //   image: "/tokens/token-uni.png",
          // },
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
