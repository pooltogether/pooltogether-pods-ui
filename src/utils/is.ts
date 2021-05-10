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

export const isTypeOfString = (value: any): Boolean => {
  return typeof value == 'string' ? true : false
}

export const isTypeOfNumber = (value: any): Boolean => {
  return typeof value == 'number' ? true : false
}

export const isBigNumberUnformatted = (bigNumberUnformatted: any): Boolean => {
  return bigNumberUnformatted && bigNumberUnformatted.type == 'BigNumber' ? true : false
}
