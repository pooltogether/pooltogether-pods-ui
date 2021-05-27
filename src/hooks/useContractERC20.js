/* --- Global Modules --- */
import { useContractCall, useContractCalls, useContractFunction, useEthers } from '@usedapp/core'
/* --- Local Modules --- */
import { ERC20Interface } from '@constants'
import { useGetERC20Contract } from '@hooks/contracts'
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
 * @name useERC20ContractCall
 * @param {Object} props
 */
export const useERC20ContractCall = (address, method, inputs = []) => {
  const { active } = useEthers()
  const [value] =
    useContractCall(
      active &&
        address &&
        isAddress(address) &&
        validateInputs(inputs) && {
          abi: ERC20Interface,
          address: getAddress(address),
          method: method,
          args: inputs
        }
    ) ?? []

  return [value]
}

/**
 * @name useERC20ContractCalls
 * @param {Object} props
 */
export const useERC20ContractCalls = (address, methods = [], inputs = []) => {
  const calls = methods.map((method, index) => ({
    abi: ERC20Interface,
    address: address,
    method: method,
    args: inputs[index]
  }))

  const values = useContractCalls(address && calls && calls) ?? []
  return Array.isArray(values) ? values.map((value) => Array.isArray(value) && value[0]) : []
}

/**
 * @name useERC20ContractFunction
 * @param {Object} props
 */
export const useERC20ContractFunction = (address, method) => {
  const { send, state } = useContractFunction(useGetERC20Contract(address), method) ?? []
  return [send, state]
}
