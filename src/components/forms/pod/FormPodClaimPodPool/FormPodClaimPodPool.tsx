/* --- Global Modules --- */
import idx from 'idx'
import React, { useState, useEffect } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

/* --- Local Modules --- */
import { useGetTokenFaucetContract } from '@hooks/contracts'
import { useGetPodAndTokenFaucetSelectOptions } from '@src/hooks/useGetPodAndTokenFaucetSelectOptions'
import { useContractTokenFaucetFunction } from '@hooks/useContractTokenFaucet'
import { commifyTokenBalance } from '@src/utils/convert'
import { Select, Spacer } from '@components'
import { customStyles } from './selectStyles.ts'

// Interface
interface IPodClaimPodPoolProps {
  className: string
  children?: React.ReactNode
  label: string
  displayLabels: boolean
  defaultValues: object
}

/**
 * @name PodClaimPodPool
 * @description Execute PodClaimPodPool transaction
 * @return Component
 */
export const FormPodClaimPodPool = ({
  className,
  label,
  defaultValues,
  displayLabels
}: IPodClaimPodPoolProps) => {
  /* --- Component State --- */
  const [podClaimableAmount, podClaimableAmountSet] = useState()
  const options = useGetPodAndTokenFaucetSelectOptions()

  /* --- Form State --- */
  const { handleSubmit, register, control, watch } = useForm({
    defaultValues: { pod: options[0] }
  })
  const formValues = watch()

  /* --- Blockchain State --- */
  const contract = useGetTokenFaucetContract(idx(formValues, (_) => _.pod.faucet))
  const [send, state] = useContractTokenFaucetFunction(
    idx(formValues, (_) => _.pod.faucet),
    'claim'
  )

  // Effect : Update Claimable POOl Tokens
  useEffect(() => {
    if (contract && idx(formValues, (_) => _.pod.value)) {
      ;(async () => {
        const claimPOOLAmount = await contract.callStatic.claim(idx(formValues, (_) => _.pod.value))
        podClaimableAmountSet(commifyTokenBalance(claimPOOLAmount))
      })()
    }
  }, [contract])

  /* --- Submit Handler --- */
  const onSubmit = async (values) => {
    send(idx(formValues, (_) => _.pod.value))
  }

  /* --- Component Styles --- */
  const formStyles = classnames('form-default', className)

  /* --- Form Component --- */
  return (
    <form className={formStyles} onSubmit={handleSubmit(onSubmit)}>
      <span className='my-2'>Claimable Amount:{podClaimableAmount}</span>
      <Select
        name='pod'
        className='h-50'
        placeholder='Select Pod'
        styles={customStyles}
        options={options}
        control={control}
      />
      <button type='submit' className='btn btn-purple my-3 w-full'>
        {label}
      </button>
    </form>
  )
}

FormPodClaimPodPool.defaultProps = {
  className: '',
  label: 'Submit',
  displayLabels: true,
  defaultValues: {}
}

FormPodClaimPodPool.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  displayLabels: PropTypes.bool,
  defaultValues: PropTypes.object
}

export default FormPodClaimPodPool
