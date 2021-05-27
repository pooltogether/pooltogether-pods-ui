import { useMemo } from 'react'
import { commifyTokenBalance } from '@src/utils/convert'
/**
 * @name TokenBalance
 * @param {Object} props
 */
export const TokenBalance = ({ balance, decimals, decimalsTrim, sx, ...props }) => {
  return useMemo(() => {
    return <span {...props}>{commifyTokenBalance(balance, decimals, decimalsTrim)}</span>
  }, [balance])
}
export default TokenBalance

TokenBalance.defaultProps = {
  balance: '0',
  decimals: 18,
  decimalsTrim: 4
}
