/* --- Global Modules --- */

import { BigNumber } from '@ethersproject/bignumber'
import { utils } from 'ethers'

/* --- Local Modules --- */
import { BigNumberUnformatted } from '@src/interfaces/bigNumber'
import { isTypeOfString, isTypeOfNumber, isBigNumberUnformatted } from './is'

/**
 * @name convertNumberToBigNumber
 * @param number
 * @param decimals
 * @returns {BigNumber}
 */
export function convertNumberToBigNumber(
  number: BigNumberUnformatted | String | Number,
  decimals: number = 18
): BigNumber {
  if (isTypeOfString(number)) {
    return BigNumber.from(utils.parseUnits(String(number), decimals))
  }
  if (isTypeOfNumber(number)) {
    return BigNumber.from(utils.parseUnits(String(number), decimals))
  }

  if (isBigNumberUnformatted(number)) {
    // @ts-ignore: Manual Check
    return BigNumber.from(number.hex)
  }

  return BigNumber.from(10)
}

export function convertBigNumberToUSD(number: BigNumber): number | string {
  const formatted = commifyNumber(converNumberToFixed(utils.formatUnits(number)))
  return formatted
}

export function convertBigNumberToString(number: BigNumber | undefined | null): string | undefined {
  if (BigNumber.isBigNumber(number)) {
    return number.toString()
  }
  return undefined
}

/**
 * @name commifyNumber
 * @param number
 */
export function commifyNumber(number: string | number) {
  return utils.commify(number)
}

/**
 * @name transformTokenToHuman
 * @param x
 * @param precision
 */
export function transformTokenToHuman(token, decimals = 18) {
  if (!token) return null
  if (BigNumber.isBigNumber(token)) {
    return utils.formatUnits(token, decimals)
  } else {
    let bn = BigNumber.from(token)
    return utils.formatUnits(bn, decimals)
  }
}

/**
 * @name numberTrimDecimals
 * @param x
 * @param precision
 */
export function numberTrimDecimals(x, precision = 2) {
  return Number.parseFloat(x).toFixed(precision)
}

/**
 * @name commifyTokenBalance
 * @param number
 */
export function commifyTokenBalance(number, decimals = 18, decimalsTrim = 6) {
  if (number) {
    return utils.commify(numberTrimDecimals(transformTokenToHuman(number, decimals), decimalsTrim))
  }
}

/**
 * @name commifyTokenBalanceFromHuman
 * @param number
 */
export function commifyTokenBalanceFromHuman(number, decimalsTrim = 7) {
  if (number) return utils.commify(numberTrimDecimals(number, decimalsTrim))
  return null
}

/**
 * @name converNumberToFixed
 * @param number
 * @param decimals Decimal precision
 */
export function converNumberToFixed(number: string | number, decimals: number = 2) {
  return Number(number).toFixed(decimals)
}

/**
 * @name parseEther
 * @param number
 * @returns {BigNumber}
 */
export function parseEther(number: string) {
  return utils.parseEther(number)
}

/**
 * @name converNumberToFixed
 * @param number
 * @param decimals
 * @returns {BigNumber}
 */
export function parseUnits(number: string, decimals: number = 18) {
  return utils.parseUnits(number, decimals)
}

export function shortenAddress(address, num = 7, showEnd = true) {
  if (!address) return null
  return num
    ? `${address.slice(0).slice(0, num)}...${showEnd ? address.slice(0).slice(-num) : ''}`
    : address
}

export function shortenTransactionHash(txHash, num = 10, showEnd = true) {
  if (!txHash) return null
  return `${txHash.slice(0).slice(0, num)}...${showEnd ? txHash.slice(0).slice(-num) : ''}`
}
export function shortenBlockHash(txHash, num, showEnd = true) {
  if (!txHash) return null
  return `${txHash.slice(0).slice(0, num)}...${showEnd ? txHash.slice(0).slice(-60 - num) : ''}`
}
