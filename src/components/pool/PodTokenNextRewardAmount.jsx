import { useGetPodNextReward } from '@hooks/pod'
import { useBatchCall } from '@hooks/batch'
import { useMemo } from 'react'

/**
 * @name PodTokenNextRewardAmount
 * @param {Object} props
 */
export const PodTokenNextRewardAmount = ({ podAccountBalance, token, ...props }) => {
  const nextPrizePoolReward = useGetPodNextReward({ token })

  console.log(token, 'tokentokentoken')

  // const batch = useBatchCall([
  //   // cDAI (Compound DAI)
  //   ERC20BatchContract("cDAI", addressPrizePoolCToken)
  //     .totalSupply()
  //     .balanceOf(addressPrizePool || constants.AddressZero),
  //   // pcDAI (PoolTogether/Compound DAI)
  //   ERC20BatchContract("pcDAI", addressPrizePoolTicket)
  //     .totalSupply()
  //     .balanceOf(addressPrizePool || constants.AddressZero),
  //   PrizePoolStrategyBatchContract(
  //     "DAIStrategy",
  //     addressPrizeStrategy
  //   ).calculateNextPrizePeriodStartTime(
  //     Number.parseFloat(Date.now() / 1000).toFixed(0)
  //   ),

  //   // PrizePool (DAI)
  //   PrizePoolBatchContract(addressPrizePool).accountedBalance(),

  //   // Pod (DAI)
  //   PodBatchContract(address)
  //     .balanceOf(account || constants.AddressZero)
  //     .totalSupply()
  //     .getPricePerShare()
  //     .vaultTokenBalance()
  //     .vaultTicketBalance()
  //     .vaultPoolBalance()
  //     .balance(),
  // ]);

  return useMemo(() => {
    return <div className=''>000</div>
  }, [nextPrizePoolReward])
}
export default PodTokenNextRewardAmount
