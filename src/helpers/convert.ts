import { BigNumber } from "@ethersproject/bignumber";
import { utils } from "ethers";
import { isTypeOfString, isTypeOfNumber, isBigNumberUnformatted } from './checks'

interface BigNumberUnformatted {
  type: String,
  hex: String
}

export const convertNumberToBigNumber = (number: BigNumberUnformatted | String | Number, decimals: number = 18): BigNumber => {
  if(isTypeOfString(number)) {
    return BigNumber.from(utils.parseUnits(String(number), decimals))
  }
  if(isTypeOfNumber(number)) {
    return BigNumber.from(utils.parseUnits(String(number), decimals))
  }
  
  if(isBigNumberUnformatted(number)) {
    // @ts-ignore: Manual Check
    return BigNumber.from(number.hex)
  }
  return BigNumber.from(0)
}