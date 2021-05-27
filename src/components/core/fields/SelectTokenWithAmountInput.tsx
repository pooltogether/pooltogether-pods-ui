/* --- Global Modules --- */
import idx from 'idx'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { utils } from 'ethers'
import { useEthers } from '@usedapp/core'

/* --- Local Modules --- */
import { Select, TokenOption, TokenSingleValue } from '@src/components'

/* ------------------------------- */
/* ------- File Interfaces ------- */
/* ------------------------------- */
interface SelectTokenWithAmountInputProps {
  className: string
  classNameInput: string
  classNameInputContainer: string
  classNameSelectContainer: string
  actionMax: Function
  address: string
  name: string
  nameSelect: string
  control: Function
  formValues: object
  options: Array<any>
  styles: object
  register: Function
  setValue: Function
}

/**
 * @name SelectTokenWithAmountInput
 * @param {Object} props
 */
export const SelectTokenWithAmountInput = ({
  className,
  classNameInput,
  classNameInputContainer,
  classNameSelectContainer,
  actionMax,
  name,
  nameSelect,
  address,
  control,
  formValues,
  onInputChange,
  register,
  setValue,
  styles,
  options,
  ...props
}: SelectTokenWithAmountInputProps) => {
  /* ----------------------- */
  /* --- Component State --- */
  /* ----------------------- */

  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */

  /* ----------------------- */
  /* --- Component Hooks --- */
  /* ----------------------- */

  /* ------------------------ */
  /* --- Component Styles --- */
  /* ------------------------ */
  const containerStyles = classnames('grid grid-cols-9', className)
  const inputStyles = classnames('w-full', classNameInput)
  const inputContainerStyles = classnames('col-span-5 md:col-span-6', classNameInputContainer)
  const selectContainerStyles = classnames('col-span-4 md:col-span-3', classNameSelectContainer)

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return (
    <div className={containerStyles}>
      <div className={inputContainerStyles}>
        <input
          className={inputStyles}
          name={name}
          placeholder={`Amount`}
          ref={register({ required: false })}
          onChange={onInputChange}
        />
        <span className='mx-0 xs:mx-1'>
          <span
            onClick={actionMax}
            className='bg-green-600 bg-opacity-70 text-white p-1 text-xs xs:text-base xs:px-3 cursor-pointer rounded-md'
          >
            max
          </span>
        </span>
      </div>
      <div className={selectContainerStyles}>
        <Select
          name={nameSelect}
          className='h-20 w-full'
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
    </div>
  )
}

SelectTokenWithAmountInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  nameSelect: PropTypes.string,
  onChange: PropTypes.string
}

SelectTokenWithAmountInput.defaultProps = {
  className: undefined,
  name: 'amount',
  nameSelect: 'token',
  onChange: () => {}
}

export default SelectTokenWithAmountInput
