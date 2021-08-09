/* --- Global Modules --- */
import { useContractCall, useEthers } from '@usedapp/core'

/* --- Local Modules --- */
import { PrizeStrategyInterface } from '@constants'
import { getAddress, isAddress } from '@ethersproject/address'

const validateInputs = (inputs) => {
  let valid = true
  Array.isArray(inputs) &&
    inputs.forEach((input) => {
      if (input == undefined || input == null) valid = false
    })
  return valid
}

/**
 * @name usePrizeStrategyContractCall
 * @param {Object} props
 */
export const usePrizeStrategyContractCall = (address, method, inputs = []) => {
  const { active } = useEthers()
  const [value] =
    useContractCall(
      active &&
        address &&
        isAddress(address) &&
        validateInputs(inputs) && {
          abi: PrizeStrategyInterface,
          address: getAddress(address),
          method: method,
          args: inputs
        }
    ) ?? []

  return [value]
}
