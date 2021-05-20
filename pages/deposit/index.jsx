import { PodCardAPI } from "@views/PodCardAPI";
import { PodCard } from "@views/PodCard";
import { ViewDepositPodOverview } from "@views/ViewDepositPodOverview";

import { ErrorBoundary, Spacer } from "@components";
import {
  useGetPodDAIAddress,
  useGetPodUSDCAddress,
  useGetPodCOMPAddress,
  useGetPodUNIAddress,
} from "@hooks/contractAddress";
import { useEthers } from "@usedapp/core";

/**
 * @name PageDeposit
 * @param {Object} props
 */
export const PageDeposit = (props) => {
  return (
    <div className="py-20">
      <div className="text-center text-center mb-10">
        <h2 className="font-black text-4xl lg:text-6xl text-teal-600">
          Deposit
        </h2>
        <p className="text-1xl text-white">
          Deposit with low gas fee and have a chance to win the prize.
        </p>
      </div>
      <div className="max-w-screen-lg mx-auto w-full p-10 lg:p-0">
        <ErrorBoundary>
          <PodsFromConnectedNetwork />
        </ErrorBoundary>
      </div>
    </div>
  );
};

const PodsFromConnectedNetwork = (props) => {
  const { chainId } = useEthers();
  switch (chainId) {
    case 1:
    case 1337:
      return (
        <>
          <PodCardAPI
            classNameContainer="border-solid border-t-4 border-yellow-400"
            token="DAI"
            symbol="DAI"
            tokenSymbol="DAI"
            decimals={18}
            tokenImage="/tokens/token-dai.png"
          />
          <PodCardAPI
            classNameContainer="border-solid border-t-4 border-blue-400 mt-10"
            token="USDC"
            symbol="USDC"
            tokenSymbol="USDC"
            decimals={6}
            tokenImage="/tokens/token-usdc.png"
          />
        </>
      );
    case 4:
      return (
        <>
          <PodCardAPI
            classNameContainer="border-solid border-t-4 border-yellow-400"
            token="DAI"
            symbol="DAI"
            tokenSymbol="DAI"
            decimals={18}
            tokenImage="/tokens/token-dai.png"
          />
          <PodCardAPI
            classNameContainer="border-solid border-t-4 border-blue-400 mt-10"
            token="USDC"
            symbol="USDC"
            tokenSymbol="USDC"
            decimals={6}
            tokenImage="/tokens/token-usdc.png"
          />
          <PodCardAPI
            classNameContainer="border-solid border-t-4 border-blue-400 mt-10"
            token="BAT"
            symbol="BAT"
            tokenSymbol="BAT"
            decimals={18}
            tokenImage="/tokens/token-bat.svg"
          />
        </>
      );
    default:
      return null;
      break;
  }
};

export default PageDeposit;
