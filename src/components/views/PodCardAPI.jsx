/* --- Global Modules --- */
import idx from "idx";
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import classnames from "classnames";
import { useMediaQuery } from "react-responsive";

/* --- Local Modules --- */
import Arrow from "../../../public/images/arrow-circle.svg";
import { useGetPodRelatedAddresses } from "@hooks/podContracts";
import { usePodOverviewBatchCall } from "@src/data/pod/usePodOverviewBatchCall";
import { usePoolTogetherPoolData } from "@src/data/pooltogether";
import { useToggle } from "@src/hooks/helpers/useToggle";
import {
  converNumberToFixed,
  convertBigNumberToString,
  convertNumberToBigNumber,
} from "@src/utils/convert";
import {
  podWinningOdds,
  percentageOfPod,
  calculateUserPrizeWinningsFromWinningPod,
} from "@src/utils/calculations/pod";

import {
  commifyTokenBalanceFromHuman,
  transformTokenToHuman,
} from "@src/helpers/blockchain";

import { useERC20ContractCall } from "@hooks/useContractERC20";

import {
  ERC20Balance,
  TokenBalance,
  UserClaimablePool,
  UserClaimablePoolViaTokenDrop,
  PodClaimablePool,
  PodPrizePoolPeriodEndFromCache,
  USDValue,
  Spacer,
  Tooltip,
} from "@components";
import { useGetContractAddress } from "@src/hooks/useGetContractAddress";

/**
 * @name PodCardAPI
 * @param {Object} props
 */
export const PodCardAPI = ({ token, ...props }) => {
  const ERC20Reward = useGetContractAddress("ERC20Reward");
  const addresses = useGetPodRelatedAddresses(token);
  const batchQuery = usePodOverviewBatchCall(addresses);
  const cacheQuery = usePoolTogetherPoolData(addresses?.prizePool);

  // console.log(cacheQuery, "cacheQuery");
  // console.log(batchQuery, "batchQuerybatchQuery");
  // console.log(addresses, "addressesaddresses");

  return useMemo(() => {
    if (batchQuery.isLoading) {
      return <PodCardLoading {...props} />;
    }

    if (batchQuery.isError) {
      return <PodCardDisconnected isError {...props} />;
    }

    if (addresses.pod && batchQuery.isSuccess) {
      return (
        <PodCard
          address={addresses?.pod}
          addressPodTokenDrop={addresses?.tokenDrop}
          addressReward={addresses.reward}
          addressReward={ERC20Reward}
          addressToken={addresses?.token}
          dataCache={cacheQuery?.data}
          dataBlock={batchQuery?.data}
          {...props}
        />
      );
    }
    return null;
  }, [cacheQuery.isFetching, batchQuery.isFetching]);
};

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
  addressPodTokenDrop,
  addressReward,
  ...props
}) => {
  const [isOpen, toggleIsOpen] = useToggle();
  const [dataCalculations, dataCalculationsSet] = useState({});

  const [symbolReward] = useERC20ContractCall(addressReward, "symbol");
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
        ),
      });
    }
  }, []);

  /* --- Styling & Layout --- */
  const classNameContainerComposed = classnames(
    "bg-purple-900 bg-opacity-30 p-10 px-10 lg:px-20 relative card-pods shadow-md",
    classNameContainer
  );

  const isTabletOrMobile = useMediaQuery({
    query: "(max-width: 980px)",
  });

  const calculateDisplayStatus = useMemo(() => {
    if (!isTabletOrMobile) return true;
    if (isTabletOrMobile && isOpen) return true;
    return false;
  }, [isTabletOrMobile, isOpen]);

  return (
    <>
      <div className={classNameContainerComposed}>
        {/* Top Row : Start  */}
        <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-x-6 text-center lg:text-left">
          <div className="col-span-3 text-teal-500">
            <div className="flex flex-col lg:flex-row lg:items-center">
              <span className="block text-center text-5xl lg:text-6xl text-teal lg:text-white">
                <USDValue
                  number={idx(dataCache, (_) => _.prize.totalValueUsd)}
                />
              </span>
              <span className="tag-blue mt-2 lg:mt-0 lg:ml-2 self-center">
                weekly prize
              </span>
            </div>
            <Spacer className="my-6" />
            <div className="flex items-center justify-center lg:justify-start">
              <img src={tokenImage} width={28} />
              <Spacer className="mx-1" />
              <span className="block text-xl text-white">
                {symbol} pool rewards
                <span className="ml-1">
                  {idx(dataCache, (_) => _.prizePoolWinningDate.relative)}
                </span>
                <span className="text-xs ml-1">
                  <PodPrizePoolPeriodEndFromCache
                    number={idx(
                      dataCache,
                      (_) => _.prize.prizePeriodRemainingSeconds
                    )}
                  />
                  (
                  <span className="text-xs ml-">
                    <PodPrizePoolPeriodEndFromCache
                      displayType="calendar"
                      number={idx(
                        dataCache,
                        (_) => _.prize.prizePeriodRemainingSeconds
                      )}
                    />
                  </span>
                  )
                </span>
              </span>
            </div>
          </div>
          <div className="col-span-1 mt-8 lg:mt-0 text-center lg:text-left">
            <Link href="/manage?tab=0">
              <button className="btn btn-purple-light uppercase w-full">
                Deposit {symbol}
              </button>
            </Link>
            <Spacer className="my-4" />
            <Link href="/manage?tab=1">
              <button className="btn btn-teal bg-teal-800 bg-opacity-60 text-teal-400 uppercase w-full">
                Manage
              </button>
            </Link>
          </div>
        </div>
        {/* Top Row : End  */}

        <Spacer className="my-10" />

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-6">
          {/* Grid 1 */}
          <div className="text-teal-500 text-center lg:text-left">
            <span className="block text-xs">My deposit:</span>
            <span className="block text-white text-2xl">
              <TokenBalance
                decimals={decimals}
                balance={idx(dataBlock, (_) => _.Pod.balanceOf[0])}
              />
              <span className="ml-1">{symbol}</span>
            </span>
            <span className="block">
              <span className="text-xs">Share of Pod:</span>
              <span className="ml-1">
                {idx(dataCalculations, (_) => _.percentageOfPod)} %
              </span>
            </span>
          </div>

          {calculateDisplayStatus && (
            <>
              {/* Grid 2 */}
              <div className="text-teal-500 text-center lg:text-left">
                <span className="block text-xs">My share (when Pod wins):</span>
                <span className="block text-white text-2xl">
                  <span className="ml-1">
                    {commifyTokenBalanceFromHuman(
                      transformTokenToHuman(
                        idx(
                          dataCalculations,
                          (_) => _.calculateUserPrizeWinningsFromWinningPod
                        ),
                        2
                      ),
                      2
                    )}
                  </span>
                  <span className="ml-1">{symbol}</span>
                </span>
                <span className="block">
                  <span className="text-xs">Winning odds:</span>
                  {idx(dataCalculations, (_) => _.podWinningOdds) > 0 ? (
                    <>
                      <span className="mx-1">1 in</span>
                      <span className="">
                        {commifyTokenBalanceFromHuman(
                          convertBigNumberToString(
                            idx(dataCalculations, (_) => _.podWinningOdds)
                          ),
                          0
                        )}
                      </span>
                    </>
                  ) : (
                    <span className="ml-1 text-xs text-white">
                      Make Deposit
                    </span>
                  )}
                </span>
              </div>

              {/* Grid 3 */}
              <div className="text-teal-500 text-center lg:text-left">
                <span className="block text-xs">Deposit APR:</span>
                <span className="block text-white text-2xl">
                  {converNumberToFixed(
                    idx(dataCache, (_) => _.tokenListener.apr)
                  )}{" "}
                  %
                </span>
                <span className="block">
                  <span className="text-xs">
                    Rewards in{" "}
                    <img
                      className="inline"
                      src="/tokens/token-pool.png"
                      width={14}
                    />{" "}
                    <span className="ml-0 uppercase">{symbolReward}</span>
                  </span>
                </span>
              </div>

              {/* Grid 4 */}
              <div className="text-teal-500 text-center lg:text-left">
                <span className="block text-xs">Claimable POOL:</span>
                <span className="block text-white text-2xl">
                  <UserClaimablePool address={address} />
                  <UserClaimablePoolViaTokenDrop
                    address={addressPodTokenDrop}
                  />
                  <span className="ml-1 uppercase">{symbolReward}</span>
                </span>
                <Spacer className="my-1" />
                <span className="inline-block tag-teal bg-teal-700 text-white">
                  <Link href="/manage?tab=2">Claim POOL</Link>
                </span>
              </div>
              {/* <Spacer className="my-8" /> */}
            </>
          )}
        </div>

        {/* <Spacer className="my-3" /> */}
        {isOpen && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-10 gap-y-6 row-second mt-10">
            {/* Grid 1 */}
            <div className="text-teal-500 text-center lg:text-left">
              <span className="block text-xs">Pod's Total Shares</span>
              <span className="block text-white text-2xl">
                <TokenBalance
                  decimals={decimals}
                  balance={idx(dataBlock, (_) =>
                    _.Pod.totalSupply[0].toString()
                  )}
                />
                <span className="ml-1">{symbol}</span>
              </span>
            </div>

            {/* Grid 2 */}
            <div className="text-teal-500 text-center lg:text-left">
              <span className="block text-xs">
                Pod Float
                <span className="ml-1">
                  <Tooltip>
                    <PodFloatTooltip />
                  </Tooltip>
                </span>
              </span>
              <span className="block text-white text-2xl">
                <ERC20Balance
                  className="text-white"
                  address={addressToken}
                  account={address}
                  decimals={decimals}
                  decimalsTrim={7}
                />
                {/* <TokenBalance
                  decimals={decimals}
                  balance={idx(dataBlock, (_) =>
                    _.Pod.vaultTokenBalance[0].toString()
                  )}
                /> */}
                <span className="ml-1">{symbol}</span>
              </span>
            </div>

            {/* Grid 3 */}
            <div className="text-teal-500 text-center lg:text-left">
              <span className="block text-xs">
                Pod POOL{" "}
                <span className="ml-1">
                  <Tooltip>
                    <PodPoolTooltip />
                  </Tooltip>
                </span>
              </span>
              <span className="block text-white text-2xl">
                <ERC20Balance
                  className="text-white"
                  // address={"0xdD1cba915Be9c7a1e60c4B99DADE1FC49F67f80D"}
                  address={addressReward}
                  account={"0x32470AcC4aBfbaB48786692a3F23fFC70bc69644"}
                  decimals={18}
                  decimalsTrim={7}
                />
                <span className="ml-1 uppercase">{symbolReward}</span>
              </span>
            </div>

            {/* Grid 4 */}
            <div className="text-teal-500 text-center lg:text-left">
              <span className="block text-xs">Pod Claimable POOL</span>
              <span className="block text-white text-2xl">
                <PodClaimablePool address={address} />
                <span className="ml-1 uppercase">{symbolReward}</span>
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
  );
};

/**
 * @name ExpandButton
 * @param {Boolean} isOpen
 * @param {Boolean} isTabletOrMobile
 * @param {Function} toggleIsOpen
 * @returns {React.ComponentElement}
 */
const ExpandButton = ({ isOpen, isTabletOrMobile, toggleIsOpen }) => {
  const styleAbsolute = classnames("absolute right-0 bottom-2 cursor-pointer", {
    "bg-purple-700 bg-opacity-20 rounded-xl right-2 h-12 w-12 flex flex-center": isTabletOrMobile,
    "-bottom-6": !isTabletOrMobile,
  });

  const styleContainer = classnames(
    "block cursor-pointer text-teal text-xs text-center",
    {
      "bg-purple-900 bg-opacity-90 -bottom-6 rounded-b-xl py-1 px-5": !isTabletOrMobile,
      "rounded-xl p-0": isTabletOrMobile,
    }
  );

  const styleArrow = classnames("mx-1", {
    "transform rotate-180": isOpen,
  });

  return (
    <>
      <span onClick={toggleIsOpen} className={styleAbsolute}>
        <span className={styleContainer}>
          {isOpen ? (
            <span className="flex items-center ">
              {isTabletOrMobile ? (
                <img
                  className={styleArrow}
                  src="/images/arrow-circle.svg"
                  width={22}
                  height={22}
                />
              ) : (
                <img
                  className={styleArrow}
                  src="/images/arrow-circle.svg"
                  width={12}
                />
              )}
              {!isTabletOrMobile && (
                <span className="inline-block">Less Info</span>
              )}
            </span>
          ) : (
            <span className="flex items-center ">
              {isTabletOrMobile ? (
                <img
                  className={styleArrow}
                  src="/images/arrow-circle.svg"
                  width={22}
                  height={22}
                />
              ) : (
                // <Arrow
                //   className={styleArrow}
                //   width={26}
                //   height={26}
                //   fill="rgba(165, 151, 250, 1)"
                // />
                <img
                  className={styleArrow}
                  src="/images/arrow-circle.svg"
                  width={12}
                />
              )}
              {!isTabletOrMobile && (
                <span className="inline-block">More Info</span>
              )}
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
  );
};

/**
 * @name PodCardDisconnected
 * @param {*} param0
 * @returns
 */
const PodCardDisconnected = ({
  classNameContainer,
  dataCache,
  tokenImage,
  symbol,
}) => {
  const classNameContainerComposed = classnames(
    "bg-purple-900 bg-opacity-40 p-10 px-20 text-center text-white",
    classNameContainer
  );

  return (
    <div className={classNameContainerComposed}>
      <div className="grid gap-x-6 grid-cols-4">
        <div className="col-span-3 text-teal-500">
          <div className="flex items-center ">
            <span className="block text-6xl text-white">
              <USDValue number={idx(dataCache, (_) => _.prize.totalValueUsd)} />
            </span>
            <span className="tag-blue ml-2 self-center">weekly prize</span>
          </div>
          <Spacer className="my-6" />
          <div className="flex items-center">
            <img src={tokenImage} width={28} />
            <Spacer className="mx-1" />
            <span className="block text-xl text-white">
              {symbol} pool rewards
              <span className="ml-1">
                {idx(dataCache, (_) => _.prizePoolWinningDate.relative)}
              </span>
              <span className="text-xs ml-1">
                <PodPrizePoolPeriodEndFromCache
                  number={idx(
                    dataCache,
                    (_) => _.prize.prizePeriodRemainingSeconds
                  )}
                />
                (
                <span className="text-xs ml-">
                  <PodPrizePoolPeriodEndFromCache
                    displayType="calendar"
                    number={idx(
                      dataCache,
                      (_) => _.prize.prizePeriodRemainingSeconds
                    )}
                  />
                </span>
                )
              </span>
            </span>
          </div>
        </div>
        <div className="col-span-1">
          <Link href="/manage?tab=0">
            <button className="btn-purple-light text-black-60 uppercase w-full">
              Deposit {symbol}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

/**
 * @name PodCardLoading
 * @param {*} param0
 * @returns
 */
const PodCardLoading = ({
  classNameContainer,
  symbol,
  tokenImage,
  isError,
  ...props
}) => {
  const classNameContainerComposed = classnames(
    "bg-purple-900 p-10 px-20 text-center text-white",
    classNameContainer
  );

  if (isError)
    return (
      <div className={classNameContainerComposed}>
        <div className="text-center">
          <img className="inline-block" src={tokenImage} width={48} />
          <h2 className="text-4xl my-3">Error Fetching Data</h2>
          <span className="text-gray-200">
            Are you connected to the right network?
          </span>
        </div>
      </div>
    );

  return (
    <div className={classNameContainerComposed}>
      <div className="text-center">
        <img className="inline-block" src={tokenImage} width={48} />
        <h2 className="text-4xl mt-3">Pod Loading...</h2>
      </div>
    </div>
  );
};

const PodFloatTooltip = (props) => {
  return (
    <div className="card bg-purple-500 text-white max-w-sm ">
      <h4 className="text-xl border-bottom">Pod's Float</h4>
      <p className="text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

const PodPoolTooltip = (props) => {
  return (
    <div className="card bg-purple-500 text-white max-w-sm ">
      <h4 className="text-xl border-bottom">Pod's Pool</h4>
      <p className="text-xs">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
};

export default PodCardAPI;
