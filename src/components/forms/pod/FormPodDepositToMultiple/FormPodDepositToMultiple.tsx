/* --- Global Modules --- */
import idx from 'idx'
import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { utils } from 'ethers'
import { useEthers } from '@usedapp/core'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

/* --- Local Modules --- */
import { IPodForm } from '@src/interfaces/forms'
import { selectTokenDropStyles } from '../select-tokendrop-styles'
import { commifyTokenBalanceFromHuman } from '@src/utils/convert'
import { useERC20ContractCall } from '@hooks/useContractERC20'
import { useGetPodSelectOptions } from '@hooks/useGetPodSelectOptions'
// Contracts
import { usePodContractCall, usePodContractFunction } from '@hooks/useContractPod'

// Components
import {
  ERC20Balance,
  ERC20UnlockTransferFrom,
  TransactionConfetti,
  TransactionMining,
  WalletIsConnected,
  Spacer,
  SelectTokenWithAmountInput,
  PodWinningOddsAfterDeposit
} from '@src/components'

import { convertNumberToBigNumber } from '@src/utils/convert'
import { isBigNumber } from '@src/utils/is'

/**
 * @name PodDepositTo
 * @description Execute PodDepositTo transaction
 * @return Component
 */
export const FormPodDepositToMultiple = ({ label, defaultToken, defaultValues }: IPodForm) => {
  /* --- Component State --- */
  /* ----------------------- */
  const [withdrawAmount, withdrawAmountSet] = useState()
  const selectOptions = useGetPodSelectOptions()
  const [cachedValues, cachedValuesSet] = useState({})
  const [isDisabled, isDisabledSet] = useState()

  /* ------------------ */
  /* --- Form State --- */
  /* ------------------ */
  const { handleSubmit, register, control, setValue, watch } = useForm({
    defaultValues: {
      pod: selectOptions[0]
    }
  })
  const formValues = watch()

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers()
  const [send, state] = usePodContractFunction(
    idx(formValues, (_) => _.pod.value),
    'depositTo'
  )

  const [prizePoolTokenCall] = usePodContractCall(
    idx(formValues, (_) => _.pod.value),
    'token'
  )

  const [decimals] = useERC20ContractCall(cachedValues.token, 'decimals')
  const [tokenSymbol] = useERC20ContractCall(cachedValues.token, 'symbol')
  const [balanceOf] = useERC20ContractCall(cachedValues.token, 'balanceOf', [account])
  /* ----------------------- */
  /* --- Component Hooks --- */
  /* ----------------------- */

  // Set Default Token :: Effect
  useEffect(() => {
    if (defaultToken) {
      const filtered = selectOptions.filter((option) => {
        return utils.getAddress(option.value) == utils.getAddress(defaultToken)
      })
      if (filtered.length > 0) {
        setValue('pod', filtered[0])
      }
    }
  }, [])

  useEffect(() => {
    if (account) setValue('to', account)
  }, [account])

  useEffect(() => {
    if (prizePoolTokenCall) {
      cachedValuesSet({
        token: prizePoolTokenCall
      })
    }
  }, [prizePoolTokenCall])

  const [error, errorSet] = useState()
  useEffect(() => {
    if (formValues && formValues.tokenAmount && isBigNumber(balanceOf)) {
      const amount = convertNumberToBigNumber(formValues.tokenAmount, decimals)
      if (amount.gt(balanceOf)) {
        isDisabledSet(true)
        errorSet('You don’t have enough balance.')
      } else {
        isDisabledSet(false)
        errorSet(undefined)
      }
    } else {
      isDisabledSet(false)
      errorSet(undefined)
    }
  }, [formValues, decimals])

  /* -------------------------- */
  /* --- Component Handlers --- */
  /* -------------------------- */

  const setInputAmountMax = () => {
    setValue('tokenAmount', utils.formatUnits(balanceOf, decimals))
  }

  /* --- Submit Handler --- */
  const onSubmit = async (values) => {
    withdrawAmountSet(commifyTokenBalanceFromHuman(values.tokenAmount))
    send(values.to, utils.parseUnits(values.tokenAmount, decimals))
  }

  /* ------------------------- */
  /* --- Component Renders --- */
  /* ------------------------- */
  /* --- Transaction Mining Component --- */
  if (idx(state, (_) => _.status) == 'Mining') {
    return (
      <span className=''>
        <TransactionMining
          state={state}
          amount={withdrawAmount}
          action='Depositing'
          symbol={tokenSymbol}
        />
      </span>
    )
  }

  /* --- Transaction Confetti Component --- */
  if (idx(state, (_) => _.status) == 'Success') {
    return (
      <TransactionConfetti
        state={state}
        action={'Successfully deposited'}
        amount={withdrawAmount}
        symbol={tokenSymbol}
      />
    )
  }

  const classNameButton = classNames('btn-purple w-full', {
    'bg-purple-700 text-black-60': isDisabled,
    'text-purple-900 btn-gradient btn-gradient-2': !isDisabled
  })

  /* --- Form Component --- */
  return (
    <>
      <>
        <div className='flex items-center justify-between'>
          <span className='text-gray-100'>Deposit</span>
          <span className='flex items-center'>
            {!prizePoolTokenCall ? (
              '0.00'
            ) : (
              <ERC20Balance account={account} address={prizePoolTokenCall} />
            )}
            <span className='ml-1'>Balance</span>
          </span>
        </div>
        <Spacer className='my-1' />
        <form className={'form-default text-gray-600'} onSubmit={handleSubmit(onSubmit)}>
          <input
            hidden
            className='input-default mb-1'
            name='to'
            placeholder='To'
            ref={register({ required: true })}
          />
          <SelectTokenWithAmountInput
            name='tokenAmount'
            nameSelect='pod'
            register={register}
            control={control}
            styles={selectTokenDropStyles}
            options={selectOptions}
            actionMax={setInputAmountMax}
            classNameInput='bg-transparent text-xl font-light text-white h-full w-full focus:outline-none'
            classNameInputContainer='bg-teal-600 bg-opacity-20 h-15 flex items-center justify-between input-skinny relative'
            // classNameSelectContainer="ml-0 text-gray-600 bg-teal-600 bg-opacity-20"
          />
          {error && <span className='text-red-400 my-0'>{error}</span>}
          <Spacer className='my-2' />
          <WalletIsConnected>
            <ERC20UnlockTransferFrom
              label='Select Token'
              address={prizePoolTokenCall}
              allowanceOf={idx(formValues, (_) => _.pod.value)}
              classNameIncreaseAllowance='text-white'
            >
              <button disabled={isDisabled} className={classNameButton}>
                {label}
              </button>
            </ERC20UnlockTransferFrom>
          </WalletIsConnected>
        </form>
        {/* <div className=' mt-4'>
          <div className='bg-purple-500 bg-opacity-30 rounded-md p-3 text-center'>
            <span className='block font-light text-normal text-teal-700 text-sm'>
              Calculated Winning Odds after Deposit
            </span>
            <PodWinningOddsAfterDeposit
              className='text-2xl text-white'
              depositAmount={convertNumberToBigNumber(formValues.tokenAmount || '0', decimals)}
              address={idx(formValues, (_) => _.pod.value)}
            />
            <Spacer className='my-3' />
          </div>
        </div> */}
      </>
    </>
  )
}

// export default CustomOption;

FormPodDepositToMultiple.defaultProps = {
  className: '',
  label: 'Deposit',
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
