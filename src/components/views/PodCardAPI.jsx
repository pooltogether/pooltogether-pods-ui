/* --- Global Modules --- */
import idx from 'idx'
import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { useMediaQuery } from 'react-responsive'

/* --- Local Modules --- */
import { TOOLTIP_CLASSNAMES } from '@src/constants'
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
import { usePrizeStrategyContractCall } from '@hooks/useContractPrizeStrategy'
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
        addressPrizeStrategy={addresses?.strategy}
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
  addressPrizeStrategy,
  ...props
}) => {
  const [isOpen, toggleIsOpen] = useToggle()
  const [dataCalculations, dataCalculationsSet] = useState({})

  const [symbolReward] = useERC20ContractCall(addressReward, 'symbol')
  const [numberOfWinners] = usePrizeStrategyContractCall(addressPrizeStrategy, 'numberOfWinners')
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
          ),
          numberOfWinners,
          decimals
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
              <span className='tag tag-teal mt-2 lg:mt-0 lg:ml-2 self-center'>weekly prize</span>
            </div>
            <Spacer className='my-6' />
            <div className='flex items-center lg:items-start lg:justify-start flex-col lg:flex-row lg:justify-start'>
              <img src={tokenImage} width={28} />
              <Spacer className='mx-1' />
              <span className='flex items-center text-white'>
                <span className='text-sm lg:text-xl mb-2 lg:mb-0'>{symbol} prize in:</span>
                <span className='ml-1  opacity-70'>
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
              <button className='btn btn-teal uppercase w-full'>Withdraw</button>
            </Link>
          </div>
        </div>
        {/* Top Row : End  */}

        <Spacer className='my-10' />

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-6'>
          {/* Grid 1 */}
          <div className='text-teal-500 text-center lg:text-left'>
            <span className='block text-xxs'>My deposit:</span>
            <span className='block text-white'>
              <PodBalanceOfUnderlying className='text-2xl' address={address} decimals={decimals} />
              <span className='ml-1 opacity-70'>{symbol}</span>
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
                <span className='block text-white'>
                  <PodUserShareOfPrize
                    className='text-2xl'
                    address={address}
                    addressPrizePool={addressPrizePool}
                  />
                  {/* <span className='ml-1  opacity-70'></span> */}
                  <span className='ml-1  opacity-70'>{symbol}</span>
                </span>
                <span className='block'>
                  <span className='text-xxs'>Winning odds:</span>
                  <PodWinningOdds
                    className='ml-1 text-xxs text-white opacity-70'
                    address={address}
                    addressPrizePool={addressPrizePool}
                    addressPrizeStrategy={addressPrizeStrategy}
                    decimals={decimals}
                    addressToken={addressToken}
                    addressTicket={addressTicket}
                  />
                </span>
              </div>

              {/* Grid 3 */}
              <div className='text-teal-500 text-center lg:text-left'>
                <span className='block text-xxs'>Deposit APR:</span>
                <span className='block text-white'>
                  <span className='text-2xl'>
                    {converNumberToFixed(idx(dataCache, (_) => _.tokenFaucets[0].apr))}
                  </span>{' '}
                  <span className='opacity-70'>%</span>
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
                <span className='block text-white'>
                  <UserClaimablePoolViaTokenDrop
                    className='text-2xl'
                    address={addressPodTokenDrop}
                    decimalsTrim={6}
                  />
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
              <span className='block text-white'>
                <PodBalanceTotal
                  className='text-2xl'
                  address={address}
                  decimals={decimals}
                  decimalsTrim={2}
                />
                <span className='ml-1  opacity-70'>{symbol}</span>
              </span>
            </div>

            {/* Grid 2 */}
            <div className='text-teal-500 text-center lg:text-left'>
              <span className='block text-xxs'>
                Pod Float
                <span className='ml-1  opacity-70'>
                  <Tooltip>
                    <PodFloatTooltip address={address} />
                  </Tooltip>
                </span>
              </span>
              <span className='block text-white'>
                <ERC20Balance
                  className='text-2xl'
                  address={addressToken}
                  account={address}
                  decimals={decimals}
                  decimalsTrim={2}
                  defaultValue='0.00'
                />
                <span className='ml-1  opacity-70'>{symbol}</span>
              </span>
            </div>

            {/* Grid 3 */}
            <div className='text-teal-500 text-center lg:text-left'>
              <span className='block text-xxs'>
                Pod POOL{' '}
                <span className='ml-1  opacity-70'>
                  <Tooltip>
                    <PodPoolTooltip />
                  </Tooltip>
                </span>
              </span>
              <span className='block text-white'>
                <ERC20Balance
                  className='text-2xl'
                  address={addressReward}
                  account={addressPodTokenDrop}
                  decimals={18}
                  decimalsTrim={6}
                />
                <span className='ml-1 opacity-70 uppercase'>{symbolReward}</span>
              </span>
            </div>

            {/* Grid 4 */}
            <div className='text-teal-500 text-center lg:text-left'>
              <span className='block text-xxs'>Pod Claimable POOL</span>
              <span className='block mb-1 text-white'>
                <PodClaimablePool className='text-2xl' address={address} decimalsTrim={7} />
                <span className='ml-1 uppercase opacity-70'>{symbolReward}</span>
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
  const styleAbsolute = classnames('absolute right-0 cursor-pointer', {
    'bg-purple-700 hover:bg-purple-600 bg-opacity-20 duration-200 rounded-xl right-2 h-12 w-12 flex flex-center': isTabletOrMobile
  })

  const styleContainer = classnames('block cursor-pointer text-teal text-xxs text-center', {
    'bg-purple-900 hover:bg-purple-700 bg-opacity-90 duration-200 -bottom-6 rounded-b-lg py-1 px-5': !isTabletOrMobile,
    'rounded-xl p-0': isTabletOrMobile
  })

  const classNamesMobileArrow = classnames('mx-1', {
    'transform rotate-180': isOpen
  })

  const classNamesArrow = classnames('relative mr-1', {
    'transform rotate-180': isOpen
  })

  return (
    <>
      <span
        onClick={toggleIsOpen}
        className={styleAbsolute}
        style={{
          bottom: !isTabletOrMobile ? -25 : 10
        }}
      >
        <span className={styleContainer}>
          {isOpen ? (
            <span className='flex items-center '>
              {isTabletOrMobile ? (
                <img
                  className={classNamesMobileArrow}
                  src='/images/arrow-circle.svg'
                  width={22}
                  height={22}
                />
              ) : (
                <img
                  className={classNamesArrow}
                  src='/images/arrow-circle.svg'
                  width={12}
                  style={{ top: -1 }}
                />
              )}
              {!isTabletOrMobile && <span className='inline-block'>Less Info</span>}
            </span>
          ) : (
            <span className='flex items-center'>
              {isTabletOrMobile ? (
                <img
                  className={classNamesMobileArrow}
                  src='/images/arrow-circle.svg'
                  width={22}
                  height={22}
                />
              ) : (
                <img
                  className={classNamesArrow}
                  src='/images/arrow-circle.svg'
                  width={12}
                  style={{ top: -1 }}
                />
              )}
              {!isTabletOrMobile && <span className='inline-block'>More info</span>}
            </span>
          )}
        </span>
      </span>
      <style jsx>{`
        .toggle-button {
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
//             <span className='tag tag-blue ml-2 self-center'>weekly prize</span>
//           </div>
//           <Spacer className='my-6' />
//           <div className='flex items-center'>
//             <img src={tokenImage} width={28} />
//             <Spacer className='mx-1' />
//             <span className='block text-white'>
//               <span className='text-sm lg:text-xl'>{symbol} prize in:</span>
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
//             <button className='btn btn-purple-light text-black-60 uppercase w-full'>
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
    <div className={TOOLTIP_CLASSNAMES}>
      <h4 className='text-xl'>Pod's Float</h4>
      <p className='text-xxs'>
        Float refers to deposits which have not been deposited into the PrizePool via the batch
        function. In other words, when a user deposits tokens, those tokens will be temporarily held
        in the Pod, before regularily being deposited into the PrizePool.
      </p>
      <p className='text-xxs'>
        When a user withdraws from a Pod, the float <span className='font-bold'>is used first</span>{' '}
        before withdrawing tokens from the PrizePool:{' '}
        <em>reducing gas costs and minimizing the PrizePool early exit fee.</em>
      </p>
      <p className='text-xxs'>
        <a
          className='tag tag-purple cursor-pointer hover:shadow-lg'
          href='https://docs.pooltogether.com/tutorials/operate-a-prize-pool#fairness'
          target='_blank'
        >
          Early Exit Fee Documentation
        </a>
      </p>
    </div>
  )
}

const PodPoolTooltip = (props) => {
  return (
    <div className={TOOLTIP_CLASSNAMES}>
      <h4 className='text-xl'>Pod POOL - Fair Token Distribution</h4>
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
        <a
          className='tag tag-purple cursor-pointer hover:shadow-lg'
          href='https://medium.com/pooltogether/governance-101-fca9ab8b8ba2'
          target='_blank'
        >
          Governance 101
        </a>
        <a
          className='tag tag-purple cursor-pointer ml-1 hover:shadow-lg'
          href='https://gov.pooltogether.com/'
          target='_blank'
        >
          Governance Forum
        </a>
      </p>
      <p className='text-xxs'></p>
    </div>
  )
}

export default PodCardAPI
