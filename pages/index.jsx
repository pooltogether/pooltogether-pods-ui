import { PodCardAPI } from '@views/PodCardAPI'

/**
 * @name PageDeposit
 * @param {Object} props
 */
export const PageDeposit = (props) => {
  return (
    <div className='py-20'>
      <div className='text-center text-center mb-10'>
        <h2 className='font-semibold text-4xl lg:text-6xl text-teal-500'>Deposit</h2>
        <p className='text-1xl text-white'>
          Deposit with low gas fees and always have a chance to win the prize.
        </p>
      </div>
      <div className='max-w-screen-lg mx-auto w-full p-0 lg:p-0'>
        <PodCardAPI
          classNameContainer='border-solid border-t-4 border-yellow-400'
          token='DAI'
          symbol='DAI'
          tokenSymbol='DAI'
          decimals={18}
          tokenImage='/tokens/token-dai.png'
        />
        <PodCardAPI
          classNameContainer='border-solid border-t-4 border-blue-400 mt-16'
          token='USDC'
          symbol='USDC'
          tokenSymbol='USDC'
          decimals={6}
          tokenImage='/tokens/token-usdc.png'
        />
      </div>
    </div>
  )
}

export default PageDeposit
