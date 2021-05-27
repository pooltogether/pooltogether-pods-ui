/* --- Global Modules --- */
import { useEffect, useMemo, useState } from 'react'
import { BigNumber } from 'ethers'
import { useEthers } from '@usedapp/core'

/* --- Local Modules --- */
import { commifyTokenBalance } from '@src/utils/convert'
import { useGetPodContract } from '@src/hooks/contracts'

const calculateAPR = (amount, price) => {
  return amount.mul(price).mul(365)
}

/**
 * @name UserPoolApr
 * @param {Object} props
 */
export const UserPoolApr = ({ address, label, ...props }) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */
  const [depositAPR, depositAPRSet] = useState('0')
  const [podClaimableAmount, podClaimableAmountSet] = useState('0')

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers()
  const contract = useGetPodContract(address)

  /* -------------------------- */
  /* --- Blockchain Effects --- */
  /* -------------------------- */
  // Effect : Update Claimable POOl Tokens
  useEffect(() => {
    if (account && contract && contract.address) {
      ;(async () => {
        const claimPOOLAmount = await contract.callStatic.claim(account)
        podClaimableAmountSet(commifyTokenBalance(claimPOOLAmount.toString()))
        const price = BigNumber.from(22)
        calculateAPR(claimPOOLAmount, price)
      })()
    }
  }, [contract])

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return useMemo(() => {
    return <span className=''>{depositAPR} %</span>
  }, [depositAPR])
}

UserPoolApr.defaultProps = {
  label: 'Claim Pool'
}

export default UserPoolApr
