/* --- Global Modules --- */
import { useEffect, useMemo, useState } from 'react'

/* --- Local Modules --- */
import { commifyTokenBalance } from '@src/utils/convert'
import { useGetPodContract } from '@src/hooks/contracts'

/**
 * @name PodClaimablePool
 * @param {Object} props
 */
export const PodClaimablePool = ({ className, address, decimalsTrim, label, ...props }) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */
  const [podClaimableAmount, podClaimableAmountSet] = useState('0.00')

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const contract = useGetPodContract(address)

  /* ------------------------ */
  /* --- Blockchain Hooks --- */
  /* ------------------------ */
  // Effect : Update Claimable POOl Tokens
  useEffect(() => {
    if (contract && address) {
      ;(async () => {
        try {
          const amount = await contract.callStatic.drop()
          podClaimableAmountSet(commifyTokenBalance(amount, 18, decimalsTrim))
        } catch (error) {
          // TODO Add error logging
        }
      })()
    }
  }, [contract])

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return <span className={className}>{podClaimableAmount}</span>
}

PodClaimablePool.defaultProps = {
  label: 'Claim Pool',
  decimalsTrim: 7
}

export default PodClaimablePool
