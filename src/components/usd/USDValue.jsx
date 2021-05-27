import { convertNumberToBigNumber, convertBigNumberToUSD } from '@src/utils/convert'

/**
 * @name USDValue
 * @param {Object} props
 */
export const USDValue = ({ number, decimals = 18 }) => {
  const usd = convertBigNumberToUSD(convertNumberToBigNumber(number, decimals))

  return <div className=''>{usd}</div>
}
export default USDValue
