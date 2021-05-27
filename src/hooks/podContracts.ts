import { useGetContractAddress } from '@hooks/useGetContractAddress'

export function useGetPodRelatedAddresses(pod: string) {
  const dai = useGetPodDAIAddress()
  const usdc = useGetPodUSDCAddress()
  const comp = useGetPodCOMPAddress()
  const uni = useGetPodUNIAddress()
  const bat = useGetPodBATAddress()

  switch (pod) {
    case 'dai':
    case 'DAI':
      return dai
    case 'usdc':
    case 'USDC':
      return usdc
    case 'comp':
    case 'COMP':
      return comp
    case 'uni':
    case 'UNI':
      return uni
    case 'bat':
    case 'BAT':
      return bat
    default:
      break
  }
}

/**
 * @name useGetPodDAIAddress
 * @description Get all Pod related address for DAI.
 */
export const useGetPodDAIAddress = () => {
  const pod = useGetContractAddress('PodDAI')
  const token = useGetContractAddress('PodDAIToken')
  const tokenDrop = useGetContractAddress('PodDAITokenDrop')
  const prizePool = useGetContractAddress('PodDAIPrizePool')
  const strategy = useGetContractAddress('PodDAIPrizePoolStrategy')
  const faucet = useGetContractAddress('PodDAIFaucet')
  const ctoken = useGetContractAddress('PodDAIcToken')
  const ticket = useGetContractAddress('PodDAITicket')
  const sponsorship = useGetContractAddress('PodDAIPrizePoolTicketSponsored')

  const reward = useGetContractAddress('ERC20Reward')

  return {
    pod,
    token,
    tokenDrop,
    prizePool,
    strategy,
    faucet,
    ctoken,
    ticket,
    sponsorship,
    reward
  }
}

/**
 * @name useGetPodDAIAddress
 * @description Get all Pod related address for DAI.
 */
export const useGetPodUSDCAddress = () => {
  const pod = useGetContractAddress('PodUSDC')
  const token = useGetContractAddress('PodUSDCToken')
  const tokenDrop = useGetContractAddress('PodUSDCTokenDrop')
  const prizePool = useGetContractAddress('PodUSDCPrizePool')
  const strategy = useGetContractAddress('PodUSDCPrizePoolStrategy')
  const faucet = useGetContractAddress('PodUSDCFaucet')
  const ctoken = useGetContractAddress('PodUSDCcToken')
  const ticket = useGetContractAddress('PodUSDCTicket')
  const sponsorship = useGetContractAddress('PodUSDCPrizePoolTicketSponsored')

  const reward = useGetContractAddress('ERC20Reward')

  return {
    pod,
    token,
    tokenDrop,
    prizePool,
    strategy,
    faucet,
    ctoken,
    ticket,
    sponsorship,
    reward
  }
}

/**
 * @name useGetPodCOMPAddress
 * @description Get all Pod related address for DAI.
 */
export const useGetPodCOMPAddress = () => {
  const pod = useGetContractAddress('PodCOMP')
  const token = useGetContractAddress('PodCOMPToken')
  const tokenDrop = useGetContractAddress('PodCOMPTokenDrop')
  const prizePool = useGetContractAddress('PodCOMPPrizePool')
  const strategy = useGetContractAddress('PodCOMPPrizePoolStrategy')
  const faucet = useGetContractAddress('PodCOMPFaucet')
  const ctoken = useGetContractAddress('PodCOMPcToken')
  const ticket = useGetContractAddress('PodCOMPPrizePoolTicket')
  const sponsorship = useGetContractAddress('PodCOMPPrizePoolTicketSponsored')

  return {
    pod,
    tokenDrop,
    prizePool,
    strategy,
    faucet,
    ctoken,
    ticket,
    sponsorship
  }
}

/**
 * @name useGetPodUNIAddress
 * @description Get all Pod related address for DAI.
 */
export const useGetPodUNIAddress = () => {
  const pod = useGetContractAddress('PodUNI')
  const token = useGetContractAddress('PodUNIToken')
  const tokenDrop = useGetContractAddress('PodUNITokenDrop')
  const prizePool = useGetContractAddress('PodUNIPrizePool')
  const strategy = useGetContractAddress('PodUNIPrizePoolStrategy')
  const faucet = useGetContractAddress('PodUNIFaucet')
  const ctoken = useGetContractAddress('PodUNIcToken')
  const ticket = useGetContractAddress('PodUNIPrizePoolTicket')
  const sponsorship = useGetContractAddress('PodUNIPrizePoolTicketSponsored')

  return {
    pod,
    tokenDrop,
    prizePool,
    strategy,
    faucet,
    ctoken,
    ticket,
    sponsorship
  }
}

/**
 * @name useGetPodBATAddress
 * @description Get all Pod related address for BAT.
 */
export const useGetPodBATAddress = () => {
  const pod = useGetContractAddress('PodBAT')
  const tokenDrop = useGetContractAddress('PodBATTokenDrop')
  const prizePool = useGetContractAddress('PodBATPrizePool')
  const strategy = useGetContractAddress('PodBATPrizePoolStrategy')
  const faucet = useGetContractAddress('PodBATFaucet')
  const ctoken = useGetContractAddress('PodBATcToken')
  const ticket = useGetContractAddress('PodBATPrizePoolTicket')
  const sponsorship = useGetContractAddress('PodBATPrizePoolTicketSponsored')

  return {
    pod,
    tokenDrop,
    prizePool,
    strategy,
    faucet,
    ctoken,
    ticket,
    sponsorship
  }
}
