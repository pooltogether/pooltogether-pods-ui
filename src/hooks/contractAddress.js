import { useGetContractAddress } from "@hooks/useGetContractAddress";

/**
 * @name useGetAllPodAddress
 * @description Get all Pod addresses.
 */
export const useGetAllPodAddress = () => {
  const PodDAI = useGetContractAddress("PodDAI");
  const PodUSDC = useGetContractAddress("PodUSDC");
  const PodCOMP = useGetContractAddress("PodCOMP");
  const PodUNI = useGetContractAddress("PodUNI");

  return {
    PodDAI,
    PodUSDC,
    PodCOMP,
    PodUNI,
  };
};

/**
 * @name useGetPodDAIAddress
 * @description Get all Pod related address for DAI.
 */
export const useGetPodDAIAddress = () => {
  const PodDAI = useGetContractAddress("PodDAI");
  const PodDAITokenDrop = useGetContractAddress("PodDAITokenDrop");
  const PodDAITicket = useGetContractAddress("PodDAITicket");
  const PodDAIPrizePool = useGetContractAddress("PodDAIPrizePool");
  const PodDAIPrizePoolStrategy = useGetContractAddress(
    "PodDAIPrizePoolStrategy"
  );
  const PodDAIFaucet = useGetContractAddress("PodDAIFaucet");
  const PodDAIcToken = useGetContractAddress("PodDAIcToken");

  return {
    PodDAI,
    PodDAITokenDrop,
    PodDAITicket,
    PodDAIPrizePool,
    PodDAIPrizePoolStrategy,
    PodDAIFaucet,
    PodDAIcToken,
  };
};

/**
 * @name useGetPodUSDCAddress
 * @description Get all Pod related address for USDC.
 */
export const useGetPodUSDCAddress = () => {
  const PodUSDC = useGetContractAddress("PodUSDC");
  const PodUSDCTokenDrop = useGetContractAddress("PodUSDCTokenDrop");
  const PodUSDCTicket = useGetContractAddress("PodUSDCTicket");
  const PodUSDCPrizePool = useGetContractAddress("PodUSDCPrizePool");
  const PodUSDCPrizePoolStrategy = useGetContractAddress(
    "PodUSDCPrizePoolStrategy"
  );
  const PodUSDCFaucet = useGetContractAddress("PodUSDCFaucet");
  const PodUSDCcToken = useGetContractAddress("PodUSDCcToken");

  return {
    PodUSDC,
    PodUSDCTokenDrop,
    PodUSDCTicket,
    PodUSDCPrizePool,
    PodUSDCPrizePoolStrategy,
    PodUSDCFaucet,
    PodUSDCcToken,
  };
};

/**
 * @name useGetPodCOMPAddress
 * @description Get all Pod related address for COMP.
 */
export const useGetPodCOMPAddress = () => {
  const PodCOMP = useGetContractAddress("PodCOMP");
  const PodCOMPTokenDrop = useGetContractAddress("PodCOMPTokenDrop");
  const PodCOMPTicket = useGetContractAddress("PodCOMPTicket");
  const PodCOMPPrizePool = useGetContractAddress("PodCOMPPrizePool");
  const PodCOMPPrizePoolStrategy = useGetContractAddress(
    "PodCOMPPrizePoolStrategy"
  );
  const PodCOMPFaucet = useGetContractAddress("PodCOMPFaucet");
  const PodCOMPcToken = useGetContractAddress("PodCOMPcToken");

  return {
    PodCOMP,
    PodCOMPTokenDrop,
    PodCOMPTicket,
    PodCOMPPrizePool,
    PodCOMPPrizePoolStrategy,
    PodCOMPFaucet,
    PodCOMPcToken,
  };
};

/**
 * @name useGetPodUNIAddress
 * @description Get all Pod related address for UNI.
 */
export const useGetPodUNIAddress = () => {
  const PodUNI = useGetContractAddress("PodUNI");
  const PodUNITokenDrop = useGetContractAddress("PodUNITokenDrop");
  const PodUNITicket = useGetContractAddress("PodUNITicket");
  const PodUNIPrizePool = useGetContractAddress("PodUNIPrizePool");
  const PodUNIPrizePoolStrategy = useGetContractAddress(
    "PodUNIPrizePoolStrategy"
  );
  const PodUNIFaucet = useGetContractAddress("PodUNIFaucet");
  const PodUNIcToken = useGetContractAddress("PodUNIcToken");

  return {
    PodUNI,
    PodUNITokenDrop,
    PodUNITicket,
    PodUNIPrizePool,
    PodUNIPrizePoolStrategy,
    PodUNIFaucet,
    PodUNIcToken,
  };
};
