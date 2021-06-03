import classnames from 'classnames'

import { commifyTokenBalance } from '@src/utils/convert'

/**
 * @name TokenBalance
 * @param {Object} props
 */
export const TokenBalance = ({ className, balance, decimals, decimalsTrim, sx, ...props }) => {
  return (
    <h4 className={classnames('inline-block', className)} {...props}>
      {commifyTokenBalance(balance, decimals, decimalsTrim)}
    </h4>
  )
}
export default TokenBalance

TokenBalance.defaultProps = {
  balance: '0',
  decimals: 18,
  decimalsTrim: 4
}
