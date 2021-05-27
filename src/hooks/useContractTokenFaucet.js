/* --- Global Modules --- */
import { useContractCall, useContractCalls, useContractFunction } from '@usedapp/core'

/* --- Local Modules --- */
import { TokenFaucetInterface } from '@constants/interfaces'
import { useGetTokenFaucetContract } from '@hooks/contracts'
import { isAddress } from '@src/utils/is'

const validateInputs = (inputs) => {
  let valid = true
  Array.isArray(inputs) &&
    inputs.forEach((input) => {
      if (input == undefined || input == null) valid = false
    })
  return valid
}

/**
 * @name useContractTokenFaucetCall
 * @param {Object} props
 */
export const useContractTokenFaucetCall = (address, method, inputs = []) => {
  const [value] =
    useContractCall(
      address &&
        isAddress(address) &&
        validateInputs(inputs) && {
          abi: TokenFaucetInterface,
          address: address,
          method: method,
          args: inputs
        }
    ) ?? []

  return [value]
}

/**
 * @name useContractTokenFaucetFunction
 * @param {Object} props
 */
export const useContractTokenFaucetFunction = (address, method) => {
  const VS = useGetTokenFaucetContract(address)
  const { send, state } = useContractFunction(useGetTokenFaucetContract(address), method) ?? []
  return [send, state]
}

/**
 * @name useContractTokenFaucetFunctions
 * @param {Object} props
 */
export const useContractTokenFaucetCalls = (address, methods = [], inputs = []) => {
  const calls = methods.map((method, index) => ({
    abi: TokenFaucetInterface,
    address: address,
    method: method,
    args: inputs[index]
  }))

  const values = useContractCalls(calls) ?? []

  return Array.isArray(values) ? values.map((value) => Array.isArray(value) && value[0]) : []
}
