/* --- Global Modules --- */
import { useMemo, useState, useEffect } from 'react'
import classNames from 'classnames'
import { BigNumber } from 'ethers'

/* --- Local Modules --- */
import { TOOLTIP_CLASSNAMES } from '@src/constants'
import { isPositiveBigNumber } from '@src/utils/is'
import { podWinningOdds } from '@src/utils/calculations/pod'
import { usePodContractCall } from '@hooks/useContractPod'
import { useERC20ContractCall } from '@hooks/useContractERC20'
import { usePrizeStrategyContractCall } from '@hooks/useContractPrizeStrategy'
import { commifyTokenBalanceFromHuman } from '@src/utils/convert'
import { Tooltip } from '@components'

/**
 * @name PodWinningOdds
 * @param {Object} props
 */
export const PodWinningOdds = ({
  className,
  address,
  addressTicket,
  addressPrizeStrategy,
  decimals
}) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */
  const [podWinningOddsCalculated, podWinningOddsCalculatedSet] = useState('Make Deposit')

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const [podTotalBalance] = usePodContractCall(address, 'balance')
  const [podTicketsTotalSupply] = useERC20ContractCall(addressTicket, 'totalSupply')
  const [numberOfWinners] = usePrizeStrategyContractCall(addressPrizeStrategy, 'numberOfWinners')
  // TODO: Use active tickets, instead of "presumed" tickets using prebatch token balance?
  // const [podTickets] = useERC20ContractCall(addressTicket, 'balanceOf', [address])

  useEffect(() => {
    'C'
    if (isPositiveBigNumber(podTotalBalance) && isPositiveBigNumber(podTicketsTotalSupply)) {
      const calculation = podWinningOdds(
        podTotalBalance,
        podTicketsTotalSupply,
        numberOfWinners,
        decimals
      )

      try {
        const calculationBN = BigNumber.from(calculation)
        if (calculationBN.gt('10000000')) throw new Error('Invalid Calculation')
        podWinningOddsCalculatedSet(`1 in ${commifyTokenBalanceFromHuman(calculation, 0)}`)
      } catch (error) {
        podWinningOddsCalculatedSet(`Unavailable`)
      }
    }
  }, [podTotalBalance, podTicketsTotalSupply])

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  const classnames = classNames('flex-inline items-center', className)

  return useMemo(() => {
    return (
      <span className={classnames}>
        {podWinningOddsCalculated}{' '}
        <Tooltip className='mt-0'>
          <TooltipContainer />
        </Tooltip>
      </span>
    )
  }, [podWinningOddsCalculated])
}

PodWinningOdds.defaultProps = {
  address: undefined,
  addressTicket: undefined
}

const TooltipContainer = (props) => {
  return (
    <div className={TOOLTIP_CLASSNAMES}>
      <h4 className='text-xl'>Pod Winning Odds</h4>
      <p className='text-xs'>
        Pod winning odds are calculated using a post-batch ticket balance. Pods at times will
        temporarily have a float (i.e. DAI or USDC) which has not been deposited into the PrizePool.
      </p>
      <p className='text-xs'>
        However, once the deposit batch (<span className='italic'>minimum once per day</span>) has
        been run, the float tokens will be converted into PrizePool tickets. Tickets are used to
        calculate a Pods exact chances of winning.
      </p>
      <p className='text-xs'>
        In other words, the Pod's float (token balance), plus the ticket balance is used when
        calculating the Pods odds of winning, even though the batch amount (float) is excluded from
        the PrizePools calculations.
      </p>
    </div>
  )
}

export default PodWinningOdds
