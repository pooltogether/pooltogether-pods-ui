/* --- Global Modules --- */
import idx from 'idx'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

/* --- Local Modules --- */
import { useGetAllPodAddress } from '@hooks/contractAddress'
import { usePodContractFunction } from '@hooks/useContractPod'
import { Select } from '@components'
import { customStyles } from './selectStyles.ts'

// Interface
interface IPodDepositToProps {
  className: string
  children?: React.ReactNode
  label: string
  displayLabels: boolean
  defaultValues: object
}

/**
 * @name PodDepositTo
 * @description Execute PodDepositTo transaction
 * @return Component
 */
export const FormPodDepositToMultiple = ({ label, defaultValues }: IPodDepositToProps) => {
  /* --- Component State --- */
  const { PodDAI, PodUSDC } = useGetAllPodAddress()

  /* --- Form State --- */
  const { handleSubmit, control, watch } = useForm({
    defaultValues
  })
  const formValues = watch()

  /* --- Blockchain State --- */
  const [send, state] = usePodContractFunction(
    idx(formValues, (_) => _.pod.value),
    'drop'
  )

  /* --- Submit Handler --- */
  const onSubmit = async (values) => {
    send()
  }

  /* --- Form Component --- */
  return (
    <>
      <form className={'form-default text-gray-600'} onSubmit={handleSubmit(onSubmit)}>
        <Select
          name='pod'
          className='h-50'
          placeholder='Token'
          styles={customStyles}
          options={[
            {
              value: PodDAI,
              label: 'DAI'
            },
            {
              value: PodUSDC,
              label: 'USDC'
            }
          ]}
          control={control}
        />
        <button type='submit' className='btn btn-purple my-3 w-full'>
          {label}
        </button>
      </form>
    </>
  )
}

FormPodDepositToMultiple.defaultProps = {
  className: '',
  label: 'Batch Deposits Pod',
  displayLabels: true,
  defaultValues: {}
}

FormPodDepositToMultiple.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  displayLabels: PropTypes.bool,
  defaultValues: PropTypes.object
}

export default FormPodDepositToMultiple
