import idx from "idx";
import { useGetPodStaticData } from "@hooks/pod";
import {
  useGetPodDAIAddress,
  useGetPodUSDCAddress,
  useGetPodCOMPAddress,
  useGetPodUNIAddress,
} from "@hooks/contractAddress";
import { useEffect, useMemo } from "react";
import {
  usePrizePoolDepositedValue,
  usePrizePoolValuePerDay,
  usePrizePoolTotalDeposits,
} from "@src/data/calculations";

/**
 * @name
 * @param {Object} props
 */
export const PodCard = (props) => {
  const {
    addressPod,
    addressPodPP,
    addressPodPPTokens,
    addressPodPPFaucet,
    addressPodPPStrategy,
    addressPodPPTicket,
    addressPodPPTicketSponsored,
  } = props;

  const addresses = {
    addressPod,
    addressPodPP,
    addressPodPPTokens,
    addressPodPPFaucet,
    addressPodPPStrategy,
    addressPodPPTicket,
    addressPodPPTicketSponsored,
  };

  // const dynamic_data = useGetPodStaticData();
  const static_data = useGetPodStaticData(addresses);

  useEffect(() => {
    console.log(static_data, "static_data");
  }, [static_data]);

  return useMemo(() => {
    if (static_data.isSuccess) {
      return <PodCardView static={static_data} />;
    }
    return null;
  }, [static_data.isSuccess]);
};

const PodCardView = (props) => {
  const totalDeposits = usePrizePoolTotalDeposits(
    idx(props, (_) => _.static.data.pcToken.totalSupply[0]),
    idx(props, (_) => _.static.data.pcsToken.totalSupply[0])
  );

  const totalDepositsValue = usePrizePoolDepositedValue(
    totalDeposits,
    idx(props, (_) => _.static.data.Pod.token[0])
  );

  const perSecondReturns = usePrizePoolValuePerDay(
    idx(props, (_) => _.static.data.Faucet.dripRatePerSecond[0])
  );

  console.log(totalDeposits.toString(), "totalDeposits");
  console.log(totalDepositsValue.toString(), "totalDepositsValue");
  // console.log(perSecondReturns.toString(), "perSecondReturns");

  return <div></div>;
};

export default PodCard;
