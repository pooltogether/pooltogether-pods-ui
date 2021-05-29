/* --- Global Modules --- */
import { useMemo, useState, useEffect } from 'react'
import classNames from 'classnames'
import { BigNumber } from 'ethers'

/* --- Local Modules --- */
import { isPositiveBigNumber } from '@src/utils/is'
import { podWinningOdds } from '@src/utils/calculations/pod'
import { usePodContractCall } from '@hooks/useContractPod'
import { useERC20ContractCall } from '@hooks/useContractERC20'
import { commifyTokenBalanceFromHuman } from '@src/utils/convert'

/**
 * @name PodWinningOddsAfterDeposit
 * @param {Object} props
 */
export const PodWinningOddsAfterDeposit = ({
  className,
  address,
  addressTicket,
  depositAmount
}) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */
  const [podWinningOddsCalculated, podWinningOddsCalculatedSet] = useState('Make Deposit')

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  console.log(address, 'addressaddress')
  const [podTicket] = usePodContractCall(address, 'ticket')
  const [podTotalBalance] = usePodContractCall(address, 'balance')
  const [podTicketsTotalSupply] = useERC20ContractCall(podTicket, 'totalSupply')

  // TODO: Use active tickets, instead of "presumed" tickets using prebatch token balance?
  // const [podTickets] = useERC20ContractCall(addressTicket, 'balanceOf', [address])

  useEffect(() => {
    console.log(
      depositAmount.toString(),
      podTotalBalance,
      podTicketsTotalSupply,
      'depositAmountdepositAmount'
    )
    if (isPositiveBigNumber(podTotalBalance) && isPositiveBigNumber(podTicketsTotalSupply)) {
      const calculation = podWinningOdds(podTotalBalance.add(depositAmount), podTicketsTotalSupply)
      try {
        const calculationBN = BigNumber.from(calculation)
        if (calculationBN.gt('10000000')) throw new Error('Invalid Calculation')
        podWinningOddsCalculatedSet(`1 in ${commifyTokenBalanceFromHuman(calculation, 0)}`)
      } catch (error) {
        podWinningOddsCalculatedSet(`Unavailable`)
      }
    } else if (isPositiveBigNumber(podTicketsTotalSupply)) {
      const calculation = podWinningOdds(depositAmount, podTicketsTotalSupply)
      try {
        const calculationBN = BigNumber.from(calculation)
        if (calculationBN.gt('10000000')) throw new Error('Invalid Calculation')
        podWinningOddsCalculatedSet(`1 in ${commifyTokenBalanceFromHuman(calculation, 0)}`)
      } catch (error) {
        podWinningOddsCalculatedSet(`Unavailable`)
      }
    }
  }, [podTotalBalance, podTicketsTotalSupply, depositAmount])

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  const style = classNames('flex-inline items-center', className)
  return useMemo(() => {
    return <span className={style}>{podWinningOddsCalculated} </span>
  }, [podWinningOddsCalculated])
}

PodWinningOddsAfterDeposit.defaultProps = {
  address: undefined,
  addressTicket: undefined
}

export default PodWinningOddsAfterDeposit
