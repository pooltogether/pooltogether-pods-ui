/* --- Global Modules --- */
import { useContractCall, useContractCalls, useContractFunction } from '@usedapp/core'

/* --- Local Modules --- */
import { PodInterface } from '@constants/interfaces'
import { useGetPodContract } from '@hooks/contracts'
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
 * @name usePodContractCall
 * @param {Object} props
 */
export const usePodContractCall = (address, method, inputs = []) => {
  const [value] =
    useContractCall(
      address &&
        isAddress(address) &&
        validateInputs(inputs) && {
          abi: PodInterface,
          address: address,
          method: method,
          args: inputs
        }
    ) ?? []

  return [value]
}

/**
 * @name usePodContractFunction
 * @param {Object} props
 */
export const usePodContractFunction = (address, method) => {
  const { send, state } = useContractFunction(useGetPodContract(address), method) ?? []
  return [send, state]
}

/**
 * @name usePodContractFunctions
 * @param {Object} props
 */
export const usePodContractCalls = (address, methods = [], inputs = []) => {
  const calls = methods.map((method, index) => ({
    abi: PodInterface,
    address: address,
    method: method,
    args: inputs[index]
  }))

  const values = useContractCalls(calls) ?? []

  return Array.isArray(values) ? values.map((value) => Array.isArray(value) && value[0]) : []
}
