/* --- Global Modules --- */
import idx from 'idx'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

/* --- Local Modules --- */
import { useGetAllPodAddress } from '@hooks/contractAddress'
import { useGetPodAndTokenDropSelectOptions } from '@src/hooks/useGetPodAndTokenDropSelectOptions'
import { usePodContractFunction } from '@hooks/useContractPod'
import { useContractTokenDropFunction } from '@hooks/useContractTokenDrop'
import { Select, Spacer, TransactionStatus } from '@components'
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
export const FormPodDropMultiple = ({ label, defaultValues }: IPodDepositToProps) => {
  /* --- Component State --- */
  const selectOptions = useGetPodAndTokenDropSelectOptions()

  /* --- Form State --- */
  const { handleSubmit, register, control, watch } = useForm({
    defaultValues
  })
  const formValues = watch()

  /* --- Blockchain State --- */
  const [send, state] = useContractTokenDropFunction(
    idx(formValues, (_) => _.pod.drop),
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
        <div className='col-span-8 ml-0 text-gray-600'>
          <Select
            name='pod'
            className='h-50'
            placeholder='Token'
            styles={customStyles}
            options={selectOptions}
            control={control}
          />
        </div>
        <Spacer className='my-2' />
        <button type='submit' className='btn btn-purple w-full'>
          {label}
        </button>
      </form>
      <div className='text-center'>
        <TransactionStatus
          state={state}
          miningLabel='Transaction Broadcast'
          sucessLabel='Transaction Success'
          classNameMining='tag-yellow my-2'
          classNameSuccess='tag-green my-2'
        />
      </div>
    </>
  )
}

FormPodDropMultiple.defaultProps = {
  className: '',
  label: 'Batch Deposits Pod',
  displayLabels: true,
  defaultValues: {}
}

FormPodDropMultiple.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  displayLabels: PropTypes.bool,
  defaultValues: PropTypes.object
}

export default FormPodDropMultiple
