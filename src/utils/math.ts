/* --- Global Modules --- */

import { BigNumber } from "@ethersproject/bignumber";

export function addBigNumbers(number1: BigNumber, number2: BigNumber): BigNumber {
  return number1.add(number2)
}
