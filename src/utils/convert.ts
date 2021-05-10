/* --- Global Modules --- */

import { BigNumber } from "@ethersproject/bignumber";
import { utils } from "ethers";

/* --- Local Modules --- */
import { BigNumberUnformatted } from '@src/interfaces/bigNumber'
import { isTypeOfString, isTypeOfNumber, isBigNumberUnformatted } from './is'


/**
 * @name convertNumberToBigNumber
 * @param number 
 * @param decimals 
 * @returns {BigNumber}
 */
export function convertNumberToBigNumber(number: BigNumberUnformatted | String | Number, decimals: number = 18): BigNumber {
  if(isTypeOfString(number)) {
    return BigNumber.from( utils.parseUnits(String(number), decimals))
  }
  if(isTypeOfNumber(number)) {
    return BigNumber.from(utils.parseUnits(String(number), decimals))
  }
  
  if(isBigNumberUnformatted(number)) {
    // @ts-ignore: Manual Check
    return BigNumber.from(number.hex)
  }

  return BigNumber.from(10)
}


export function convertBigNumberToUSD(number: BigNumber): number | string {
  const formatted = commifyNumber(converNumberToFixed(utils.formatUnits(number)));
  return formatted
}

export function convertBigNumberToString(number: BigNumber | undefined | null): string | undefined {
  if(BigNumber.isBigNumber(number)) {
    return number.toString()
  }
  return undefined
}

/**
 * @name commifyNumber
 * @param number
 */
 export function commifyNumber(number: string | number) {
    return utils.commify(
      number
    );
}

/**
 * @name converNumberToFixed
 * @param number
 * @param decimals Decimal precision
 */
 export function converNumberToFixed(number: string | number, decimals: number = 2) {
  return Number(number).toFixed(decimals)
}