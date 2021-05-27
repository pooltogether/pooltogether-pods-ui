/* --- Global Modules --- */
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { utils } from 'ethers'
import { useEthers } from '@usedapp/core'

/* --- Local Modules --- */
import { useERC20ContractCall } from '@hooks/contracts/useContractERC20Methods'
import { Select, TokenOption, TokenSingleValue } from '@components'
import idx from 'idx'

/* ------------------------------- */
/* ------- File Interfaces ------- */
/* ------------------------------- */
interface SelectTokenWithBalanceProps {
  className: string
  address: string
  control: Function
  formValues: object
  options: Array<any>
  styles: object
  register: Function
  setValue: Function
}

/**
 * @name
 * @param {Object} props
 */
export const SelectTokenWithBalance = ({
  className,
  address,
  control,
  formValues,
  register,
  setValue,
  styles,
  options,
  ...props
}: SelectTokenWithBalanceProps) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const { account } = useEthers()
  const [symbol] = useERC20ContractCall(
    idx(formValues, (_) => _.token.value),
    'symbol'
  )
  const [decimals] = useERC20ContractCall(
    idx(formValues, (_) => _.token.value),
    'decimals'
  )
  const [balanceOf] = useERC20ContractCall(
    idx(formValues, (_) => _.token.value),
    'balanceOf',
    [account]
  )

  /* ----------------------- */
  /* --- Component Hooks --- */
  /* ----------------------- */

  const setInputAmountMax = () => {
    if (setValue) setValue('tokenAmount', utils.formatUnits(balanceOf, decimals))
  }

  /* ------------------------ */
  /* --- Component Styles --- */
  /* ------------------------ */
  const containerStyles = classnames('flex-items-center w-full', className)

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return (
    <div className='w-full'>
      <Select
        name='token'
        className='h-20'
        placeholder='Token'
        components={{
          Option: TokenOption,
          SingleValue: TokenSingleValue
        }}
        styles={styles}
        options={options}
        control={control}
      />
    </div>
  )
}

SelectTokenWithBalance.propTypes = {
  className: PropTypes.string
}

SelectTokenWithBalance.defaultProps = {
  className: undefined
}

export default SelectTokenWithBalance
