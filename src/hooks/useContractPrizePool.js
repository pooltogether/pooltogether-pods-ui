/* --- Global Modules --- */
import { useContractCall, useEthers } from '@usedapp/core'

/* --- Local Modules --- */
import { PrizePoolCompoundInterface } from '@constants'
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
 * @name usePrizePoolContractCall
 * @param {Object} props
 */
export const usePrizePoolContractCall = (address, method, inputs = []) => {
  const { active } = useEthers()
  const [value] =
    useContractCall(
      active &&
        address &&
        isAddress(address) &&
        validateInputs(inputs) && {
          abi: PrizePoolCompoundInterface,
          address: getAddress(address),
          method: method,
          args: inputs
        }
    ) ?? []

  return [value]
}
