/* --- Global Modules --- */
import idx from 'idx'
import { useMemo, useState } from 'react'
import { constants, ethers } from 'ethers'
import { useEthers } from '@usedapp/core'
import { batch, contract } from '@pooltogether/etherplex'

/* --- Local Modules --- */
import contracts from '@constants/contracts'
import ERC20_ABI from '@contracts/ERC20.json'
import Pod_ABI from '@contracts/Pod.json'
import PrizePool_ABI from '@contracts/PrizePool_ABI.json'
import PrizePoolFaucet_ABI from '@contracts/PrizePoolFaucet.json'
import PrizeStrategy_ABI from '@contracts/PrizeStrategy_ABI.json'
/**
 * @name useBatchCall
 *
 * @return Batched blockchain reads from multiple smart contracts.
 */
export function useBatchCall(contractAndCalls) {
  /* --- Blockchain State --- */
  const { library } = useEthers()

  /* --- Component State --- */
  const [isLoading, isLoadingSet] = useState(false)
  const [data, dataSet] = useState(undefined)

  // HACK : TODO find better better way to memoize altered contractCalls
  // to avoid "Too many re-renders. React limits the number of renders to prevent an infinite loop.""
  // IF contracts change on Wallet connecting requires the first contract in the array to be a dynamic address
  const addresses = useMemo(() => {
    return contractAndCalls.map((contractCall) => contractCall.contract.__address)
  }, [contractAndCalls[0].contract.__address])

  useMemo(async () => {
    if (library && contractAndCalls) {
      try {
        isLoadingSet(true)
        const batchData = await batch(library, ...contractAndCalls)
        dataSet(batchData)
        isLoadingSet(false)
      } catch (error) {
        console.error(error)
      }
    }

    return data
  }, [addresses, library])

  return useMemo(
    () => ({
      data: data,
      isLoading
    }),
    [data, isLoading]
  )
}

export const PrizePoolStrategyBatchContract = (name, address) =>
  contract(name, PrizeStrategy_ABI, address)

export const PrizePoolFaucetBatchContract = (name, address) =>
  contract(name, PrizePoolFaucet_ABI, address)

export const PodBatchContract = (address) => contract('Pod', Pod_ABI, address)

export const ERC20BatchContract = (name, address) => contract(name, ERC20_ABI, address)

export const PrizePoolBatchContract = (address) =>
  !address ? null : contract('PrizePool', PrizePool_ABI, address)

const ContractsInitialized = {
  Pod: PodBatchContract,
  PrizePool: PrizePoolBatchContract
}

const composeCalls = () => {
  // contractAndCalls.map((contract) => {
  // const Contract = ContractsInitialized[contract.name];
  // console.log(Contract, contract, "contractCalls");
  // const functions = contract.calls.map(
  //   (mo) => `${mo.method}(${mo.inputs ? mo.inputs : []})`
  // );
  // console.log(functions, "functionsfunctions");
  // console.log(functions.join("."), "fcJOin");
  // const CAll = `ContractsInitialized['${contract.name}'].${functions.join(
  //   "."
  // )}`;
  // console.log(CAll, "CAll");
  // return CAll;
  // console.log(calls.join(""));
  // console.log(ContractsInitialized["Pod"], "pdpdpdp");
  // const execute = calls.join(",");
  // console.log(execute, "executeexecute");
}
