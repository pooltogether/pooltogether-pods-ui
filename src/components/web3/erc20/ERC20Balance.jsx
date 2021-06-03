/* --- Global Modules --- */
import { useMemo } from 'react'
import classnames from 'classnames'

/* --- Local Modules --- */
import { commifyTokenBalance } from '@src/utils/convert'
import { useERC20ContractCall } from '@hooks/useContractERC20'
import { isAddress } from '@src/utils/is'

/**
 * @name ERC20Balance
 * @param {Object} props
 */
export const ERC20Balance = ({
  className,
  address,
  account,
  defaultValue,
  decimalsTrim,
  ...props
}) => {
  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  if (isAddress(address) && isAddress(account)) {
    return (
      <ERC20BalanceFetch
        address={address}
        account={account}
        className={className}
        decimalsTrim={decimalsTrim}
        defaultValue={defaultValue}
      />
    )
  } else {
    return <span className={className}>{defaultValue}</span>
  }
}

export default ERC20Balance

ERC20Balance.defaultProps = {
  balance: '0',
  defaultValue: '0.00',
  decimals: 18,
  decimalsTrim: 2
}

const ERC20BalanceFetch = ({
  className,
  address,
  account,
  defaultValue,
  decimalsTrim,
  ...props
}) => {
  /* ------------------------ */
  /* --- Blockchain State --- */
  /* ------------------------ */
  const [decimals] = useERC20ContractCall(address, 'decimals', [])
  const [balanceOf] = useERC20ContractCall(address, 'balanceOf', [account])

  /* ------------------------ */
  /* --- Component Render --- */
  /* ------------------------ */
  return useMemo(() => {
    if (balanceOf && decimals) {
      return (
        <h4 className={classnames('inline-block', className)} {...props}>
          {commifyTokenBalance(balanceOf, decimals, decimalsTrim)}
        </h4>
      )
    }

    return <h4 className={classnames('inline-block', className)}>{defaultValue}</h4>
  }, [balanceOf, decimals])
}
