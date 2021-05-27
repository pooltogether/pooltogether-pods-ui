import { useGetContractAddress } from '@hooks/useGetContractAddress'

export function useGetPodRelatedAddresses(pod) {
  const dai = useGetPodDAIAddress()
  const usdc = useGetPodUSDCAddress()
  const comp = useGetPodCOMPAddress()
  const uni = useGetPodUNIAddress()

  switch (pod) {
    case 'dai':
    case 'DAI':
      return dai
    case 'usdc':
    case 'usdc':
      return usdc
    case 'comp':
    case 'COMP':
      return comp
    case 'uni':
    case 'UNI':
      return uni
    default:
      break
  }
}

/**
 * @name useGetAllPodAddress
 * @description Get all Pod addresses.
 */
export const useGetAllPodAddress = () => {
  const PodDAI = useGetContractAddress('PodDAI')
  const PodUSDC = useGetContractAddress('PodUSDC')
  const PodCOMP = useGetContractAddress('PodCOMP')
  const PodUNI = useGetContractAddress('PodUNI')
  const PodBAT = useGetContractAddress('PodBAT')

  return {
    PodDAI,
    PodUSDC,
    PodCOMP,
    PodUNI,
    PodBAT
  }
}

/**
 * @name useGetAllPodTokenFaucetAddresses
 * @description Get all Pod addresses.
 */
export const useGetAllPodTokenFaucetAddresses = () => {
  const PodDAIFaucet = useGetContractAddress('PodDAIFaucet')
  const PodUSDCFaucet = useGetContractAddress('PodUSDCFaucet')
  const PodCOMPFaucet = useGetContractAddress('PodCOMPFaucet')
  const PodUNIFaucet = useGetContractAddress('PodUNIFaucet')

  return {
    PodDAIFaucet,
    PodUSDCFaucet,
    PodCOMPFaucet,
    PodUNIFaucet
  }
}

/**
 * @name useGetAllPodAndTokenFaucetAddresses
 * @description Get all Pod addresses.
 */
export const useGetAllPodAndTokenFaucetAddresses = () => {
  const PodDAI = useGetContractAddress('PodDAI')
  const PodUSDC = useGetContractAddress('PodUSDC')
  const PodCOMP = useGetContractAddress('PodCOMP')
  const PodUNI = useGetContractAddress('PodUNI')
  const PodDAIFaucet = useGetContractAddress('PodDAIFaucet')
  const PodUSDCFaucet = useGetContractAddress('PodUSDCFaucet')
  const PodCOMPFaucet = useGetContractAddress('PodCOMPFaucet')
  const PodUNIFaucet = useGetContractAddress('PodUNIFaucet')

  return {
    dai: {
      pod: PodDAI,
      faucet: PodDAIFaucet
    },
    usdc: {
      pod: PodUSDC,
      faucet: PodUSDCFaucet
    },
    comp: {
      pod: PodCOMP,
      faucet: PodCOMPFaucet
    },
    uni: {
      pod: PodUNI,
      faucet: PodUNIFaucet
    }
  }
}

/**
 * @name useGetAllPodAndTokenDropAddresses
 * @description Get all Pod addresses.
 */
export const useGetAllPodAndTokenDropAddresses = () => {
  const PodDAI = useGetContractAddress('PodDAI')
  const PodUSDC = useGetContractAddress('PodUSDC')
  const PodCOMP = useGetContractAddress('PodCOMP')
  const PodUNI = useGetContractAddress('PodUNI')
  const PodDAITokenDrop = useGetContractAddress('PodDAITokenDrop')
  const PodUSDCTokenDrop = useGetContractAddress('PodUSDCTokenDrop')
  const PodCOMPTokenDrop = useGetContractAddress('PodCOMPTokenDrop')
  const PodUNITokenDrop = useGetContractAddress('PodUNITokenDrop')

  return {
    dai: {
      pod: PodDAI,
      drop: PodDAITokenDrop
    },
    usdc: {
      pod: PodUSDC,
      drop: PodUSDCTokenDrop
    },
    comp: {
      pod: PodCOMP,
      drop: PodCOMPTokenDrop
    },
    uni: {
      pod: PodUNI,
      drop: PodUNITokenDrop
    }
  }
}

/**
 * @name useGetPodDAIAddress
 * @description Get all Pod related address for DAI.
 */
export const useGetPodDAIAddress = () => {
  const PodDAI = useGetContractAddress('PodDAI')
  const PodDAITokenDrop = useGetContractAddress('PodDAITokenDrop')
  const PodDAITicket = useGetContractAddress('PodDAITicket')
  const PodDAIPrizePool = useGetContractAddress('PodDAIPrizePool')
  const PodDAIPrizePoolStrategy = useGetContractAddress('PodDAIPrizePoolStrategy')
  const PodDAIFaucet = useGetContractAddress('PodDAIFaucet')
  const PodDAIcToken = useGetContractAddress('PodDAIcToken')
  const PodDAIPrizePoolTicket = useGetContractAddress('PodDAIPrizePoolTicket')
  const PodDAIPrizePoolTicketSponsored = useGetContractAddress('PodDAIPrizePoolTicketSponsored')

  return {
    PodDAI,
    PodDAITokenDrop,
    PodDAITicket,
    PodDAIPrizePool,
    PodDAIPrizePoolStrategy,
    PodDAIFaucet,
    PodDAIcToken,
    PodDAIPrizePoolTicket,
    PodDAIPrizePoolTicketSponsored
  }
}

/**
 * @name useGetPodUSDCAddress
 * @description Get all Pod related address for USDC.
 */
export const useGetPodUSDCAddress = () => {
  const PodUSDC = useGetContractAddress('PodUSDC')
  const PodUSDCTokenDrop = useGetContractAddress('PodUSDCTokenDrop')
  const PodUSDCTicket = useGetContractAddress('PodUSDCTicket')
  const PodUSDCPrizePool = useGetContractAddress('PodUSDCPrizePool')
  const PodUSDCPrizePoolStrategy = useGetContractAddress('PodUSDCPrizePoolStrategy')
  const PodUSDCFaucet = useGetContractAddress('PodUSDCFaucet')
  const PodUSDCcToken = useGetContractAddress('PodUSDCcToken')

  return {
    PodUSDC,
    PodUSDCTokenDrop,
    PodUSDCTicket,
    PodUSDCPrizePool,
    PodUSDCPrizePoolStrategy,
    PodUSDCFaucet,
    PodUSDCcToken
  }
}

/**
 * @name useGetPodCOMPAddress
 * @description Get all Pod related address for COMP.
 */
export const useGetPodCOMPAddress = () => {
  const PodCOMP = useGetContractAddress('PodCOMP')
  const PodCOMPTokenDrop = useGetContractAddress('PodCOMPTokenDrop')
  const PodCOMPTicket = useGetContractAddress('PodCOMPTicket')
  const PodCOMPPrizePool = useGetContractAddress('PodCOMPPrizePool')
  const PodCOMPPrizePoolStrategy = useGetContractAddress('PodCOMPPrizePoolStrategy')
  const PodCOMPFaucet = useGetContractAddress('PodCOMPFaucet')
  const PodCOMPcToken = useGetContractAddress('PodCOMPcToken')

  return {
    PodCOMP,
    PodCOMPTokenDrop,
    PodCOMPTicket,
    PodCOMPPrizePool,
    PodCOMPPrizePoolStrategy,
    PodCOMPFaucet,
    PodCOMPcToken
  }
}

/**
 * @name useGetPodUNIAddress
 * @description Get all Pod related address for UNI.
 */
export const useGetPodUNIAddress = () => {
  const PodUNI = useGetContractAddress('PodUNI')
  const PodUNITokenDrop = useGetContractAddress('PodUNITokenDrop')
  const PodUNITicket = useGetContractAddress('PodUNITicket')
  const PodUNIPrizePool = useGetContractAddress('PodUNIPrizePool')
  const PodUNIPrizePoolStrategy = useGetContractAddress('PodUNIPrizePoolStrategy')
  const PodUNIFaucet = useGetContractAddress('PodUNIFaucet')
  const PodUNIcToken = useGetContractAddress('PodUNIcToken')

  return {
    PodUNI,
    PodUNITokenDrop,
    PodUNITicket,
    PodUNIPrizePool,
    PodUNIPrizePoolStrategy,
    PodUNIFaucet,
    PodUNIcToken
  }
}
