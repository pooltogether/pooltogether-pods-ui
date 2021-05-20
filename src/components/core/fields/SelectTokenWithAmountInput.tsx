/* --- Global Modules --- */
import idx from "idx";
import PropTypes from "prop-types";
import classnames from "classnames";
import { utils } from "ethers";
import { useEthers } from "@usedapp/core";

/* --- Local Modules --- */
import { useERC20ContractCall } from "@hooks/useContractERC20";
import { Select, TokenOption, TokenSingleValue } from "@src/components";

/* ------------------------------- */
/* ------- File Interfaces ------- */
/* ------------------------------- */
interface SelectTokenWithAmountInputProps {
  className: string;
  classNameInput: string;
  classNameInputContainer: string;
  classNameSelectContainer: string;
  actionMax: Function;
  address: string;
  name: string;
  nameSelect: string;
  control: Function;
  formValues: object;
  options: Array<any>;
  styles: object;
  register: Function;
  setValue: Function;
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
  const { account } = useEthers();
  const [symbol] = useERC20ContractCall(
    idx(formValues, (_) => _.token.value),
    "symbol"
  );
  const [decimals] = useERC20ContractCall(
    idx(formValues, (_) => _.token.value),
    "decimals"
  );
  const [balanceOf] = useERC20ContractCall(
    idx(formValues, (_) => _.token.value),
    "balanceOf",
    [account]
  );

  /* ----------------------- */
  /* --- Component Hooks --- */
  /* ----------------------- */

  /* ------------------------ */
  /* --- Component Styles --- */
  /* ------------------------ */
  const containerStyles = classnames("grid grid-cols-7", className);
  const inputStyles = classnames("w-full", classNameInput);
  const inputContainerStyles = classnames(
    "col-span-5",
    classNameInputContainer
  );
  const selectContainerStyles = classnames(
    "col-span-2",
    classNameSelectContainer
  );

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return (
    <div className={containerStyles}>
      <div className={inputContainerStyles}>
        <input
          // className="input-defaults bg-transparent h-12 h-full text-xl font-light text-gray-500 w-full focus:outline-none"
          className={inputStyles}
          name={name}
          // type="number"
          placeholder={`Amount`}
          ref={register({ required: true })}
          onChange={onInputChange}
        />
        <span className="mx-2">
          <span
            onClick={actionMax}
            className="bg-green-600 bg-opacity-70 text-white p-1 px-3 cursor-pointer rounded-md"
          >
            max
          </span>
        </span>
      </div>
      <div className={selectContainerStyles}>
        <Select
          name={nameSelect}
          className="h-20 w-full"
          placeholder="Token"
          components={{
            Option: TokenOption,
            SingleValue: TokenSingleValue,
          }}
          styles={styles}
          options={options}
          control={control}
        />
      </div>
    </div>
  );
};

SelectTokenWithAmountInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  nameSelect: PropTypes.string,
  onChange: PropTypes.string,
};

SelectTokenWithAmountInput.defaultProps = {
  className: undefined,
  name: "amount",
  nameSelect: "token",
  onChange: () => {},
};

export default SelectTokenWithAmountInput;
