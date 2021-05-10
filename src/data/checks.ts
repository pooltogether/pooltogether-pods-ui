import { useEffect, useMemo } from "react";
import { utils } from "ethers";
import { BigNumber } from "@ethersproject/bignumber";


export const isUndefined = (value: any | undefined): Boolean => {
  return typeof value == 'undefined'? true : false
}

export const isAddress = (value: any | undefined): Boolean => {
  return utils.isAddress(value)
}

export const isTransactionHash = (number: BigNumber | any): Boolean => {
  return BigNumber.isBigNumber(number)? true : false
}

export const isBigNumber = (number: BigNumber | any): Boolean => {
  return BigNumber.isBigNumber(number)? true : false
}

export const isPositiveBigNumber = (number: BigNumber | undefined): Boolean => {
  return BigNumber.isBigNumber(number) && number.gt(0) ? true : false
}