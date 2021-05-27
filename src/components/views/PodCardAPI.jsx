/* --- Global Modules --- */
import idx from 'idx'
import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { useMediaQuery } from 'react-responsive'

/* --- Local Modules --- */
import { useToggle } from '@src/hooks/helpers/useToggle'
import { useGetContractAddress } from '@src/hooks/useGetContractAddress'
import { useGetPodRelatedAddresses } from '@hooks/podContracts'
import { usePodOverviewBatchCall } from '@src/hooks/usePodOverviewBatchCall'
import { usePoolTogetherPoolData } from '@src/hooks/usePoolTogetherPoolData'

import { converNumberToFixed, convertNumberToBigNumber } from '@src/utils/convert'
import {
  podWinningOdds,
  percentageOfPod,
  calculateUserPrizeWinningsFromWinningPod
} from '@src/utils/calculations/pod'
import { useERC20ContractCall } from '@hooks/useContractERC20'
import {
  PodBalanceOfUnderlying,
  PodClaimRewardToken,
  PodShareOfPodTotal,
  PodBalanceTotal,
  PodNewPrizeCountdown,
  PodUserShareOfPrize,
  PodWinningOdds,
  ERC20Balance,
  UserClaimablePoolViaTokenDrop,
  PodClaimablePool,
  PodPrizePoolPeriodEndFromCache,
  USDValue,
  Spacer,
  Tooltip
} from '@components'

/**
 * @name PodCardAPI
 * @param {Object} props
 */
export const PodCardAPI = ({ token, ...props }) => {
  const ERC20Reward = useGetContractAddress('ERC20Reward')
  const addresses = useGetPodRelatedAddresses(token)
  const batchQuery = usePodOverviewBatchCall(addresses)
  const cacheQuery = usePoolTogetherPoolData(addresses?.prizePool)

  if (batchQuery.status == 'success' && cacheQuery.status == 'success') {
    return (
      <PodCard
        address={addresses?.pod}
        addressPrizePool={addresses?.prizePool}
        addressPodTokenDrop={addresses?.tokenDrop}
        addressReward={addresses.reward}
        addressReward={ERC20Reward}
        addressToken={addresses?.token}
        addressTicket={addresses?.ticket}
        dataCache={cacheQuery?.data}
        dataBlock={batchQuery?.data}
        {...props}
      />
    )
  }
  return <PodCardLoading {...props} />
}

/**
 * @name PodCard
 * @param {*} param0
 * @returns
 */
const PodCard = ({
  classNameContainer,
  decimals,
  symbol,
  tokenImage,
  dataCache,
  dataBlock,
  address,
  addressToken,
  addressTicket,
  addressPodTokenDrop,
  addressReward,
  addressPrizePool,
  ...props
}) => {
  const [isOpen, toggleIsOpen] = useToggle()
  const [dataCalculations, dataCalculationsSet] = useState({})

  const [symbolReward] = useERC20ContractCall(addressReward, 'symbol')
  useEffect(() => {
    if (dataBlock) {
      dataCalculationsSet({
        percentageOfPod: percentageOfPod(
          idx(dataBlock, (_) => _.Pod.balanceOf[0]),
          idx(dataBlock, (_) => _.Pod.balance[0])
        ),
        podWinningOdds: podWinningOdds(
          idx(dataBlock, (_) => _.Pod.balance[0]),
          convertNumberToBigNumber(
            idx(dataCache, (_) => _.tokens.ticket.totalSupply),
            decimals
          )
        ),
        calculateUserPrizeWinningsFromWinningPod: calculateUserPrizeWinningsFromWinningPod(
          idx(dataBlock, (_) => _.Pod.balanceOf[0]),
          idx(dataBlock, (_) => _.Pod.balance[0]),
          convertNumberToBigNumber(
            idx(dataCache, (_) => _.prize.totalValueUsd),
            2
          )
        )
      })
    }
  }, [dataBlock])

  /* --- Styling & Layout --- */
  const classNameContainerComposed = classnames(
    'bg-purple-900 bg-opacity-30 bg-blur p-10 px-10 lg:px-20 relative card-pods shadow-xl',
    classNameContainer
  )

  const isTabletOrMobile = useMediaQuery({
    query: '(max-width: 980px)'
  })

  const calculateDisplayStatus = useMemo(() => {
    if (!isTabletOrMobile) return true
    if (isTabletOrMobile && isOpen) return true
    return false
  }, [isTabletOrMobile, isOpen])

  return (
    <>
      <div className={classNameContainerComposed}>
        {/* Top Row : Start  */}
        <div className='grid grid-cols-1 lg:grid-cols-4 lg:gap-x-6 text-center lg:text-left'>
          <div className='col-span-3 text-teal-500'>
            <div className='flex flex-col lg:flex-row lg:items-center'>
              <h3 className='block font-bold text-center text-4xl xs:text-5xl md:text-6xl lg:text-6xl text-white lg:text-white'>
                <USDValue number={idx(dataCache, (_) => _.prize.totalValueUsd)} />
              </h3>
              <span className='tag-blue mt-2 lg:mt-0 lg:ml-2 self-center'>weekly prize</span>
            </div>
            <Spacer className='my-6' />
            <div className='flex items-center lg:items-start lg:justify-start flex-col lg:flex-row lg:justify-start'>
              <img src={tokenImage} width={28} />
              <Spacer className='mx-1' />
              <span className='flex items-center text-white'>
                <span className='text-sm lg:text-xl mb-2 lg:mb-0'>{symbol} pool rewards</span>
                <span className='ml-1'>
                  {idx(dataCache, (_) => _.prizePoolWinningDate.relative)}
                </span>
              </span>
              <PodNewPrizeCountdown pool={dataCache} />
            </div>
          </div>
          <div className='col-span-1 mt-8 lg:mt-0 text-center lg:text-left'>
            <Link href={`/manage?tab=0&token=${address}`}>
              <button className='btn btn-purple-light uppercase w-full'>Deposit</button>
            </Link>
            <Spacer className='my-4' />
            <Link href={`/manage?tab=1&token=${address}`}>
              <button className='btn btn-teal bg-teal-800 bg-opacity-60 text-teal-400 uppercase w-full'>
                Withdraw
              </button>
            </Link>
          </div>
        </div>
        {/* Top Row : End  */}

        <Spacer className='my-10' />

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-6'>
          {/* Grid 1 */}
          <div className='text-teal-500 text-center lg:text-left'>
            <span className='block text-xxs'>My deposit:</span>
            <span className='block text-white text-2xl'>
              <PodBalanceOfUnderlying address={address} decimals={decimals} />
              <span className='ml-1'>{symbol}</span>
            </span>
            <span className='block'>
              <span className='text-xxs'>Share of Pod:</span>
              <PodShareOfPodTotal className='ml-1' address={address} />
            </span>
          </div>

          {calculateDisplayStatus && (
            <>
              {/* Grid 2 */}
              <div className='text-teal-500 text-center lg:text-left'>
                <span className='block text-xxs'>My share (when Pod wins):</span>
                <span className='block text-white text-2xl'>
                  <span className='ml-1'>
                    <PodUserShareOfPrize address={address} addressPrizePool={addressPrizePool} />
                  </span>
                  <span className='ml-1'>{symbol}</span>
                </span>
                <span className='block'>
                  <span className='text-xxs'>Winning odds:</span>
                  <PodWinningOdds
                    className='ml-1 text-xxs text-white'
                    address={address}
                    addressPrizePool={addressPrizePool}
                    addressToken={addressToken}
                    addressTicket={addressTicket}
                  />
                </span>
              </div>

              {/* Grid 3 */}
              <div className='text-teal-500 text-center lg:text-left'>
                <span className='block text-xxs'>Deposit APR:</span>
                <span className='block text-white text-2xl'>
                  {converNumberToFixed(idx(dataCache, (_) => _.tokenListener.apr))} %
                </span>
                <span className='block'>
                  <span className='text-xxs'>
                    Rewards in <img className='inline' src='/tokens/token-pool.png' width={14} />{' '}
                    <span className='ml-0 uppercase'>{symbolReward}</span>
                  </span>
                </span>
              </div>

              {/* Grid 4 */}
              <div className='text-teal-500 text-center lg:text-left'>
                <span className='block text-xxs'>Claimable POOL:</span>
                <span className='block text-white text-2xl'>
                  <UserClaimablePoolViaTokenDrop address={addressPodTokenDrop} />
                  <span className='ml-1 uppercase'>{symbolReward}</span>
                </span>
                <Spacer className='my-1' />
                <PodClaimRewardToken addressTokenDrop={addressPodTokenDrop} />
              </div>
            </>
          )}
        </div>

        {isOpen && (
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-6 row-second mt-10'>
            {/* Grid 1 */}
            <div className='text-teal-500 text-center lg:text-left'>
              <span className='block text-xxs'>Pod's Balance</span>
              <span className='block text-white text-2xl'>
                <PodBalanceTotal address={address} decimals={decimals} decimalsTrim={2} />
                <span className='ml-1'>{symbol}</span>
              </span>
            </div>

            {/* Grid 2 */}
            <div className='text-teal-500 text-center lg:text-left'>
              <span className='block text-xxs'>
                Pod Float
                <span className='ml-1'>
                  <Tooltip>
                    <PodFloatTooltip />
                  </Tooltip>
                </span>
              </span>
              <span className='block text-white text-2xl'>
                <ERC20Balance
                  className='text-white'
                  address={addressToken}
                  account={address}
                  decimals={decimals}
                  decimalsTrim={2}
                />
                <span className='ml-1'>{symbol}</span>
              </span>
            </div>

            {/* Grid 3 */}
            <div className='text-teal-500 text-center lg:text-left'>
              <span className='block text-xxs'>
                Pod POOL{' '}
                <span className='ml-1'>
                  <Tooltip>
                    <PodPoolTooltip />
                  </Tooltip>
                </span>
              </span>
              <span className='block text-white text-2xl'>
                <ERC20Balance
                  className='text-white'
                  address={addressReward}
                  account={addressPodTokenDrop}
                  // account={addressPodTokenDrop}
                  decimals={18}
                  decimalsTrim={7}
                />
                <span className='ml-1 uppercase'>{symbolReward}</span>
              </span>
            </div>

            {/* Grid 4 */}
            <div className='text-teal-500 text-center lg:text-left'>
              <span className='block text-xxs'>Pod Claimable POOL</span>
              <span className='block mb-1 text-white text-2xl'>
                <PodClaimablePool address={address} />
                <span className='ml-1 uppercase'>{symbolReward}</span>
              </span>
            </div>
          </div>
        )}
        <span>
          <ExpandButton
            isOpen={isOpen}
            isTabletOrMobile={isTabletOrMobile}
            toggleIsOpen={toggleIsOpen}
          />
        </span>
      </div>
      <style jsx>{`
        .row-second {
          border-top: 2px;
          border-color: rgba(165, 151, 250, 0.14);
          border-style: solid;
          padding-bottom: 20px;
          padding-top: 20px;
        }
      `}</style>
    </>
  )
}

/**
 * @name ExpandButton
 * @param {Boolean} isOpen
 * @param {Boolean} isTabletOrMobile
 * @param {Function} toggleIsOpen
 * @returns {React.ComponentElement}
 */
const ExpandButton = ({ isOpen, isTabletOrMobile, toggleIsOpen }) => {
  const styleAbsolute = classnames('absolute right-0 bottom-2 cursor-pointer', {
    'bg-purple-700 bg-opacity-20 rounded-xl right-2 h-12 w-12 flex flex-center': isTabletOrMobile,
    '-bottom-6': !isTabletOrMobile
  })

  const styleContainer = classnames('block cursor-pointer text-teal text-xxs text-center', {
    'bg-purple-900 bg-opacity-90 -bottom-6 rounded-b-xl py-1 px-5': !isTabletOrMobile,
    'rounded-xl p-0': isTabletOrMobile
  })

  const styleArrow = classnames('mx-1', {
    'transform rotate-180': isOpen
  })

  return (
    <>
      <span onClick={toggleIsOpen} className={styleAbsolute}>
        <span className={styleContainer}>
          {isOpen ? (
            <span className='flex items-center '>
              {isTabletOrMobile ? (
                <img className={styleArrow} src='/images/arrow-circle.svg' width={22} height={22} />
              ) : (
                <img className={styleArrow} src='/images/arrow-circle.svg' width={12} />
              )}
              {!isTabletOrMobile && <span className='inline-block'>Less Info</span>}
            </span>
          ) : (
            <span className='flex items-center '>
              {isTabletOrMobile ? (
                <img className={styleArrow} src='/images/arrow-circle.svg' width={22} height={22} />
              ) : (
                <img className={styleArrow} src='/images/arrow-circle.svg' width={12} />
              )}
              {!isTabletOrMobile && <span className='inline-block'>More Info</span>}
            </span>
          )}
        </span>
      </span>
      <style jsx>{`
        .toggle-button {
          // background-color: rgba(165, 151, 250, 0.15);
          border-radius: 0 0 24px 24px;
          display: block;
        }
      `}</style>
    </>
  )
}

/**
 * @name PodCardDisconnected
 * @param {*} param0
 * @returns
 */
// const PodCardDisconnected = ({ classNameContainer, dataCache, tokenImage, symbol, address }) => {
//   const classNameContainerComposed = classnames(
//     'bg-purple-900 bg-opacity-40 p-10 px-20 text-center text-white',
//     classNameContainer
//   )

//   return (
//     <div className={classNameContainerComposed}>
//       <div className='grid gap-x-6 grid-cols-4'>
//         <div className='col-span-3 text-teal-500'>
//           <div className='flex items-center '>
//             <span className='block text-6xl text-white'>
//               <USDValue number={idx(dataCache, (_) => _.prize.totalValueUsd)} />
//             </span>
//             <span className='tag-blue ml-2 self-center'>weekly prize</span>
//           </div>
//           <Spacer className='my-6' />
//           <div className='flex items-center'>
//             <img src={tokenImage} width={28} />
//             <Spacer className='mx-1' />
//             <span className='block text-white'>
//               <span className='text-sm lg:text-xl'>{symbol} pool rewards</span>
//               <span className='text-xxs ml-1'>
//                 <PodPrizePoolPeriodEndFromCache
//                   number={idx(dataCache, (_) => _.prize.prizePeriodRemainingSeconds)}
//                 />
//                 (
//                 <span className='text-xxs ml-1'>
//                   <PodPrizePoolPeriodEndFromCache
//                     displayType='calendar'
//                     number={idx(dataCache, (_) => _.prize.prizePeriodRemainingSeconds)}
//                   />
//                 </span>
//                 )
//               </span>
//             </span>
//           </div>
//         </div>
//         <div className='col-span-1'>
//           <Link href={`/manage?tab=0&token=${address}`}>
//             <button className='btn-purple-light text-black-60 uppercase w-full'>
//               Deposit {symbol}
//             </button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

/**
 * @name PodCardLoading
 * @param {*} param0
 * @returns
 */
const PodCardLoading = ({ classNameContainer, symbol, tokenImage, isError, ...props }) => {
  const classNameContainerComposed = classnames(
    'bg-purple-900 bg-opacity-30 bg-blur p-10 px-10 lg:px-20 text-center text-white text-opacity-80 shadow-xl',
    classNameContainer
  )

  if (isError)
    return (
      <div className={classNameContainerComposed}>
        <div className='text-center'>
          <img className='inline-block' src={tokenImage} width={48} />
          <h2 className='text-2xl my-3'>Error Fetching Data</h2>
          <span className='text-gray-200'>Are you connected to the right network?</span>
        </div>
      </div>
    )

  return (
    <div className={classNameContainerComposed}>
      <div className='text-center'>
        <img className='inline-block' src={tokenImage} width={48} />
        <h2 className='text-2xl mt-3'>Pod Loading...</h2>
      </div>
    </div>
  )
}

const PodFloatTooltip = (props) => {
  return (
    <div className='card bg-purple-500 text-white max-w-sm '>
      <h4 className='text-xl border-bottom'>Pod's Float</h4>
      <p className='text-xxs'>
        Float refers to deposits which have not been deposited into the PrizePool via the batch
        function. In other words, when a user deposits tokens, those tokens will be temporarily held
        in the Pod, before regularily being deposited into the PrizePool.
      </p>
      <p className='text-xxs'>
        When a user withdrwas from a Pod, the float <span className='font-bold'>is used first</span>{' '}
        before withdrawing tokens from the PrizePool:{' '}
        <em>reducing gas costs and minimizing the PrizePool early exit fee.</em>
      </p>
      <p className='text-xxs'>
        <span
          className='tag-purple cursor-pointer hover:shadow-lg'
          href='https://docs.pooltogether.com/tutorials/operate-a-prize-pool#fairness'
          target='_blank'
        >
          Early Exit Fee Documentation
        </span>
      </p>
    </div>
  )
}

const PodPoolTooltip = (props) => {
  return (
    <div className='card bg-purple-500 text-white max-w-sm '>
      <h4 className='text-xl border-bottom'>Pod POOL - Fair Token Distribution</h4>
      <p className='text-xxs'>
        PoolTogether (<span className='italic'>currently</span>) distributes{' '}
        <a
          className='font-bold underline'
          href='https://etherscan.io/token/0x0cec1a9154ff802e7934fc916ed7ca50bde6844e'
          target='_blank'
        >
          POOL
        </a>{' '}
        tokens for deposits into governance managed PrizePools. Pods due to the unique design, are
        treated as a single user.
      </p>
      <p className='text-xxs'>
        However... Pods <span className='font-bold'>DO NOT</span> keep the accrued{' '}
        <a
          className='font-bold underline'
          href='https://etherscan.io/token/0x0cec1a9154ff802e7934fc916ed7ca50bde6844e'
          target='_blank'
        >
          POOL
        </a>{' '}
        tokens.
      </p>
      <p className='text-xxs'>
        Each Pod is deployed with a <span className='font-bold'>TokenDrop</span> smart contract that
        temporarily holds and fairly distributes{' '}
        <a
          className='font-bold underline'
          href='https://etherscan.io/token/0x0cec1a9154ff802e7934fc916ed7ca50bde6844e'
          target='_blank'
        >
          POOL
        </a>
        . Tokens are not automatically distributed and users are responsible for claiming{' '}
        <a
          className='font-bold underline'
          href='https://etherscan.io/token/0x0cec1a9154ff802e7934fc916ed7ca50bde6844e'
          target='_blank'
        >
          POOL
        </a>{' '}
        tokens from the Pod.
      </p>
      <p className='text-xxs'>
        <span
          className='tag-purple cursor-pointer hover:shadow-lg'
          href='https://medium.com/pooltogether/governance-101-fca9ab8b8ba2'
          target='_blank'
        >
          Governance 101
        </span>
        <span
          className='tag-purple cursor-pointer ml-1 hover:shadow-lg'
          href='https://gov.pooltogether.com/'
          target='_blank'
        >
          Governance Forum
        </span>
      </p>
      <p className='text-xxs'></p>
    </div>
  )
}

export default PodCardAPI
