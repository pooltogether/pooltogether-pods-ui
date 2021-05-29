/* --- Global Modules --- */
import { useEffect, useMemo, useState } from 'react'
import { useEthers } from '@usedapp/core'

/* --- Local Modules --- */
import { commifyTokenBalance } from '@src/utils/convert'
import { useGetPodContract, useGetTokenDropContract } from '@src/hooks/contracts'

/**
 * @name UserClaimablePoolViaTokenDrop
 * @param {Object} props
 */
export const UserClaimablePoolViaTokenDrop = ({
  className,
  address,
  decimalsTrim,
  label,
  ...props
}) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */
  const [podClaimableAmount, podClaimableAmountSet] = useState('0.00')

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers()
  const contract = useGetTokenDropContract(address)

  /* ------------------------ */
  /* --- Blockchain Hooks --- */
  /* ------------------------ */
  // Effect : Update Claimable POOl Tokens
  useEffect(() => {
    if (account && contract && address) {
      ;(async () => {
        try {
          const amount = await contract.callStatic.claim(account)
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

UserClaimablePoolViaTokenDrop.defaultProps = {
  label: 'Claim Pool',
  decimalsTrim: 6
}

export default UserClaimablePoolViaTokenDrop
