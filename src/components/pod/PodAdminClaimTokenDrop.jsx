/* --- Global Modules --- */
import { useEffect, useMemo } from 'react'
import { useEthers } from '@usedapp/core'

/* --- Local Modules --- */
import { TOOLTIP_CLASSNAMES } from '@src/constants'
import { usePodContractCall } from '@hooks/useContractPod'
import { useContractTokenDropFunction } from '@hooks/useContractTokenDrop'
import { Tooltip } from '@src/components'

/**
 * @name PodAdminClaimTokenDrop
 * @param {Object} props
 */
export const PodAdminClaimTokenDrop = ({
  className,
  addressPod,
  addressTokenDrop,
  decimals,
  label,
  ...props
}) => {
  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers()
  const [balance] = usePodContractCall(addressPod, 'balance', [])
  const [claimExecute, claimState] = useContractTokenDropFunction(addressTokenDrop, 'claim', [
    account
  ])

  const handleClaimRewardToken = () => {
    claimExecute(account)
  }

  // TODO - Add Toast to track to Transaction Status
  useEffect(() => {}, [claimState])

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return (
    <div className='flex items-center '>
      <button
        className='btn btn-teal tag-teal bg-teal-700 mr-1 text-white text-xs'
        onClick={handleClaimRewardToken}
      >
        {label}
      </button>
      <Tooltip>
        <TooltipDisplay />
      </Tooltip>
    </div>
  )
}

PodAdminClaimTokenDrop.defaultProps = {
  address: undefined,
  decimals: 18,
  label: 'Claim Pod POOL'
}

const TooltipDisplay = (props) => {
  return (
    <div className={TOOLTIP_CLASSNAMES}>
      <h4 className='text-xl'>Claim Pod Pool</h4>
      <p className='text-xs'>
        To distribute the reward token (i.e. POOL) the Pod must first claim the POOl and allocate
        the new tokens to current Pod users.
      </p>
    </div>
  )
}

export default PodAdminClaimTokenDrop
