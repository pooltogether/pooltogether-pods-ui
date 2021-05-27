/* --- Global Modules --- */
import { BigNumber } from '@ethersproject/bignumber'

/* --- Local Modules --- */
import { isPositiveBigNumber } from '@src/utils/is'

/**
 * @name tokenPriceAndBalance
 * @param {BigNumber} price
 * @param {BigNumber} balance
 * @returns {BigNumber} value
 */
export const tokenPriceAndBalance = (price: BigNumber, balance: BigNumber): BigNumber => {
  if (isPositiveBigNumber(price) && isPositiveBigNumber(balance)) {
    return price.mul(balance).div(100)
  } else {
    return BigNumber.from(0)
  }
}
