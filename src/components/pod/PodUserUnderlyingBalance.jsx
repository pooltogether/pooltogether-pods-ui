/* --- Global Modules --- */
import { useMemo } from 'react'
import { useEthers } from '@usedapp/core'

/* --- Local Modules --- */
import { usePodContractCall } from '@hooks/useContractPod'
import { TokenBalance } from '@src/components'

/**
 * @name PodUserUnderlyingBalance
 * @param {Object} props
 */
export const PodUserUnderlyingBalance = ({ className, address, decimals, ...props }) => {
  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers()
  const [balanceOfUnderlying] = usePodContractCall(address, 'balanceOfUnderlying', [account])

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return useMemo(() => {
    return <TokenBalance className={className} balance={balanceOfUnderlying} decimals={decimals} />
  }, [balanceOfUnderlying])
}

PodUserUnderlyingBalance.defaultProps = {
  address: undefined,
  decimals: 18
}

export default PodUserUnderlyingBalance
