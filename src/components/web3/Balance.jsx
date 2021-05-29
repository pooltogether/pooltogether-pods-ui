/* --- Global Modules --- */

/* --- Local Modules --- */
import { commifyTokenBalance } from '@src/utils/convert'

/**
 * @name Balance
 * @param {Object} props
 */
export const Balance = ({ balance, decimals, decimalsTrim, ...props }) => {
  return <span {...props}>{commifyTokenBalance(balance, decimals, decimalsTrim)}</span>
}

export default Balance

Balance.defaultProps = {
  balance: '0',
  decimals: 18,
  decimalsTrim: 6
}
