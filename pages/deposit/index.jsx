import { ViewDepositPodOverview } from "@views/ViewDepositPodOverview";

import { Spacer } from "@components";
import {
  useGetPodDAIAddress,
  useGetPodUSDCAddress,
  useGetPodCOMPAddress,
  useGetPodUNIAddress,
} from "@hooks/contractAddress";

/**
 * @name PageDeposit
 * @param {Object} props
 */
export const PageDeposit = (props) => {
  const {
    PodDAI,
    PodDAITokenDrop,
    PodDAITicket,
    PodDAIPrizePool,
    PodDAIPrizePoolStrategy,
    PodDAIFaucet,
    PodDAIcToken,
  } = useGetPodDAIAddress();

  const {
    PodUSDC,
    PodUSDCTokenDrop,
    PodUSDCTicket,
    PodUSDCPrizePool,
    PodUSDCPrizePoolStrategy,
    PodUSDCFaucet,
    PodUSDCcToken,
  } = useGetPodUSDCAddress();

  const {
    PodCOMP,
    PodCOMPTokenDrop,
    PodCOMPTicket,
    PodCOMPPrizePool,
    PodCOMPPrizePoolStrategy,
    PodCOMPFaucet,
    PodCOMPcToken,
  } = useGetPodCOMPAddress();

  const {
    PodUNI,
    PodUNITokenDrop,
    PodUNITicket,
    PodUNIPrizePool,
    PodUNIPrizePoolStrategy,
    PodUNIFaucet,
    PodUNIcToken,
  } = useGetPodUNIAddress();

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
      <div className="max-w-screen-lg mx-auto w-full">
        <ViewDepositPodOverview
          classNameContainer="border-solid border-t-4 border-yellow-400"
          token="DAI"
          symbol="DAI"
          decimals={18}
          tokenImage="/tokens/token-dai.png"
          address={PodDAI}
          addressFaucet={PodDAIFaucet}
          addressPrizePool={PodDAIPrizePool}
          addressPodTokenDrop={PodDAITokenDrop}
          addressPrizeStrategy={PodDAIPrizePoolStrategy}
          addressPrizePoolTicket={PodDAITicket}
          addressPrizePoolCToken={PodDAIcToken}
        />
        <Spacer className="my-10" />
        <ViewDepositPodOverview
          address={PodUSDC}
          classNameContainer="border-solid border-t-4 border-blue-400"
          token="USDC"
          symbol="USDC"
          decimals={6}
          tokenImage="/tokens/token-usdc.png"
          addressPrizePool={PodUSDCPrizePool}
          addressPrizeStrategy={PodUSDCPrizePoolStrategy}
          addressPrizePoolTicket={PodUSDCTicket}
          addressPrizePoolCToken={PodUSDCcToken}
          addressPodTokenDrop={PodUSDCTokenDrop}
        />

        <Spacer className="my-10" />
        <ViewDepositPodOverview
          classNameContainer="border-solid border-t-4 border-red-400"
          token="COMP"
          tokenImage="/tokens/token-comp.png"
          symbol="COMP"
          decimals={18}
          address={PodCOMP}
          addressFaucet={PodCOMPFaucet}
          addressPrizePool={PodCOMPPrizePool}
          addressPrizeStrategy={PodCOMPPrizePoolStrategy}
          addressPrizePoolTicket={PodCOMPTicket}
          addressPrizePoolCToken={PodCOMPcToken}
          addressPodTokenDrop={PodCOMPTokenDrop}
        />

        <Spacer className="my-10" />
        <ViewDepositPodOverview
          classNameContainer="border-solid border-t-4 border-green-400"
          token="UNI"
          symbol="UNI"
          decimals={18}
          tokenImage="/tokens/token-uni.png"
          address={PodUNI}
          addressFaucet={PodUNIFaucet}
          addressPrizePool={PodUNIPrizePool}
          addressPrizeStrategy={PodUNIPrizePoolStrategy}
          addressPrizePoolTicket={PodUNITicket}
          addressPrizePoolCToken={PodUNIcToken}
          addressPodTokenDrop={PodUNITokenDrop}
        />
      </div>
    </div>
  );
};
export default PageDeposit;
