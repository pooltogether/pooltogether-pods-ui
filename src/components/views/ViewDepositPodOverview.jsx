/* --- Global Modules --- */
import idx from "idx";
import { useEthers } from "@usedapp/core";
import { constants, BigNumber } from "ethers";

import { useEffect, useMemo, useState } from "react";
import classnames from "classnames";
import Spacer from "../core/common/Spacer";
import Link from "next/link";

/* --- Local Modules --- */
import { useGetCompoundPrizePoolContract } from "@hooks/contracts";
import { useBatchCall } from "@hooks/batch";

import {
  ERC20Balance,
  TokenBalance,
  UserPoolApr,
  UserClaimablePool,
  PodClaimablePool,
} from "@components";
import {
  PodBatchContract,
  ERC20BatchContract,
  PrizePoolBatchContract,
  PrizePoolStrategyBatchContract,
} from "@hooks/batch";

import {
  commifyTokenBalance,
  commifyTokenBalanceFromHuman,
} from "@src/helpers/blockchain";

import {
  calculatePrize,
  calculateYourPrizeWinnings,
  podWinningOdds,
  percentageOfPod,
  prizePoolWinningDate,
} from "@helpers/pod";

/**
 * @name ViewDepositPodOverview
 * @param {Object} props
 */
export const ViewDepositPodOverview = ({
  classNameContainer,
  decimals,
  symbol,
  tokenImage,
  address,
  addressPodTokenDrop,
  addressPrizePool,
  addressPrizeStrategy,
  addressPrizePoolTicket,
  addressPrizePoolCToken,
}) => {
  /* --- Blockchain State --- */
  const { account, library } = useEthers();
  const contractPrizePoolInit = useGetCompoundPrizePoolContract(
    addressPrizePool
  );

  /* --- Component State --- */
  const [staticCalls, staticCallsSet] = useState(undefined);
  const [dataCalculations, dataCalculationsSet] = useState({});

  useEffect(() => {
    if (!staticCalls && contractPrizePoolInit && addressPrizePool) {
      (async () => {
        const balance = await contractPrizePoolInit.callStatic.balance();
        staticCallsSet({
          balance,
        });
      })();
    }
  }, [contractPrizePoolInit]);

  const batch = useBatchCall([
    // cDAI (Compound DAI)
    ERC20BatchContract("cDAI", addressPrizePoolCToken)
      .totalSupply()
      .balanceOf(addressPrizePool || constants.AddressZero),
    // pcDAI (PoolTogether/Compound DAI)
    ERC20BatchContract("pcDAI", addressPrizePoolTicket)
      .totalSupply()
      .balanceOf(addressPrizePool || constants.AddressZero),
    PrizePoolStrategyBatchContract(
      "DAIStrategy",
      addressPrizeStrategy
    ).calculateNextPrizePeriodStartTime(
      Number.parseFloat(Date.now() / 1000).toFixed(0)
    ),

    // PrizePool (DAI)
    PrizePoolBatchContract(addressPrizePool).accountedBalance(),

    // Pod (DAI)
    PodBatchContract(address)
      .balanceOf(account || constants.AddressZero)
      .totalSupply()
      .getPricePerShare()
      .vaultTokenBalance()
      .vaultTicketBalance()
      .vaultPoolBalance()
      .balance(),
  ]);

  useEffect(() => {
    if (idx(batch, (_) => _.data) && staticCalls) {
      dataCalculationsSet({
        prizePoolWinningDate: prizePoolWinningDate(
          idx(
            batch,
            (_) => _.data.DAIStrategy.calculateNextPrizePeriodStartTime[0]
          )
        ),
        percentageOfPod: percentageOfPod(
          idx(batch, (_) => _.data.Pod.balanceOf[0]),
          idx(batch, (_) => _.data.Pod.balance[0])
        ),
        podWinningOdds: podWinningOdds(
          idx(batch, (_) => _.data.Pod.balance[0]),
          idx(batch, (_) => _.data.pcDAI.totalSupply[0])
        ),
        calculatePrize: calculatePrize(
          idx(batch, (_) => _.data.PrizePool.accountedBalance[0]),
          idx(staticCalls, (_) => _.balance),
          BigNumber.from(1),
          decimals
        ),
        calculateYourPrizeWinnings: calculateYourPrizeWinnings(
          idx(batch, (_) => _.data.PrizePool.accountedBalance[0]),
          idx(staticCalls, (_) => _.balance),
          BigNumber.from(1),
          percentageOfPod(
            idx(batch, (_) => _.data.Pod.balanceOf[0]),
            idx(batch, (_) => _.data.Pod.balance[0])
          )
        ),
      });
    }
  }, [idx(batch, (_) => _.data), staticCalls]);

  useEffect(() => {
    // console.log(dataCalculations, "dataCalculations");
  }, [dataCalculations]);

  /* --- Styling & Layout --- */
  const classNameContainerComposed = classnames(
    "bg-purple-900 p-10 px-20",
    classNameContainer
  );

  return (
    <div className={classNameContainerComposed}>
      <div className="grid gap-x-6 grid-cols-4">
        <div className="col-span-3 text-teal-500">
          <div className="flex items-center ">
            <span className="block text-6xl text-white">
              {commifyTokenBalanceFromHuman(
                idx(dataCalculations, (_) => _.calculatePrize),
                6
              )}
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
                {idx(dataCalculations, (_) => _.prizePoolWinningDate.relative)}
              </span>
              <span className="text-xs ml-1">
                ({" "}
                <span className="text-xs ml-">
                  {idx(dataCalculations, (_) => _.prizePoolWinningDate.unit)}
                </span>{" "}
                |{" "}
                {idx(dataCalculations, (_) => _.prizePoolWinningDate.calendar)})
              </span>
            </span>
          </div>
        </div>
        <div className="col-span-1">
          <Link href="/manage?tab=0">
            <button className="btn btn-purple bg-purple-200 text-purple-800 uppercase w-full">
              Deposit {symbol}
            </button>
          </Link>
          <Spacer className="my-4" />
          <Link href="/manage?tab=1">
            <button className="btn btn-teal text-purple-800 uppercase w-full">
              Manage
            </button>
          </Link>
        </div>
      </div>
      <Spacer className="my-10" />

      <div className="grid grid-cols-4 gap-x-10">
        {/* Grid 1 */}
        <div className="text-teal-500">
          <span className="block text-xs">My deposit:</span>
          <span className="block text-white text-2xl">
            <TokenBalance
              decimals={decimals}
              balance={idx(batch, (_) => _.data.Pod.balanceOf[0])}
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

        {/* Grid 2 */}
        <div className="text-teal-500">
          <span className="block text-xs">My share (when Pod wins):</span>
          <span className="block text-white text-2xl">
            <span className="ml-1">
              {commifyTokenBalanceFromHuman(
                idx(dataCalculations, (_) => _.calculateYourPrizeWinnings),
                decimals
              )}
            </span>
            <span className="ml-1">{symbol}</span>
          </span>
          <span className="block">
            <span className="text-xs">Winning odds:</span>
            <span className="ml-1">
              {idx(dataCalculations, (_) => _.podWinningOdds)} %
            </span>
          </span>
        </div>

        {/* Grid 3 */}
        <div className="text-teal-500">
          <span className="block text-xs">Deposit APR:</span>
          <span className="block text-white text-2xl">
            <UserPoolApr address={address} />
          </span>
          <span className="block">
            <span className="text-xs">
              Rewards in{" "}
              <img className="inline" src="/tokens/token-pool.png" width={14} />{" "}
              POOL
            </span>
          </span>
        </div>

        {/* Grid 4 */}
        <div className="text-teal-500">
          <span className="block text-xs">Claimable POOL:</span>
          <span className="block text-white text-2xl">
            <UserClaimablePool address={address} />
            <span className="ml-1">POOL</span>
          </span>
          <Spacer className="my-1" />
          <span className="inline-block tag-teal bg-teal-700 text-white">
            <Link href="/manage?tab=2">Claim POOL</Link>
          </span>
        </div>
      </div>
      <Spacer className="my-8" />
      <h1 className="text-xl font-semibold text-teal">Pod Information</h1>
      <Spacer className="my-3" />
      <div className="grid grid-cols-4 gap-x-10">
        {/* Grid 1 */}
        <div className="text-teal-500">
          <span className="block text-xs">Total Shares</span>
          <span className="block text-white text-2xl">
            <TokenBalance
              decimals={decimals}
              balance={idx(batch, (_) =>
                _.data.Pod.vaultTicketBalance[0].toString()
              )}
            />
            <span className="ml-1">{symbol}</span>
          </span>
        </div>

        {/* Grid 2 */}
        <div className="text-teal-500">
          <span className="block text-xs">Pod Float</span>
          <span className="block text-white text-2xl">
            <TokenBalance
              decimals={decimals}
              balance={idx(batch, (_) =>
                _.data.Pod.vaultTokenBalance[0].toString()
              )}
            />
            <span className="ml-1">{symbol}</span>
          </span>
        </div>

        {/* Grid 3 */}
        <div className="text-teal-500">
          <span className="block text-xs">Pod POOL</span>
          <span className="block text-white text-2xl">
            <ERC20Balance
              className="text-white"
              address={"0x0cec1a9154ff802e7934fc916ed7ca50bde6844e"}
              account={addressPodTokenDrop}
              decimals={18}
              decimalsTrim={7}
            />
            <span className="ml-1">POOL</span>
          </span>
        </div>

        {/* Grid 4 */}
        <div className="text-teal-500">
          <span className="block text-xs">Pod Claimable POOL</span>
          <span className="block text-white text-2xl">
            <PodClaimablePool address={address} />
            <span className="ml-1">POOL</span>
          </span>
        </div>
      </div>
    </div>
  );
};

ViewDepositPodOverview.defaultProps = {
  address: constants.AddressZero,
  addressPodTokenDrop: constants.AddressZero,
  addressPrizePool: constants.AddressZero,
  addressPrizeStrategy: constants.AddressZero,
  addressPrizePoolTicket: constants.AddressZero,
  addressPrizePoolCToken: constants.AddressZero,
};

const PodRenderBalanceOf = ({
  className,
  data,
  decimals,
  defaultValue,
  ...props
}) => {
  return useMemo(() => {
    console.log(decimals, "decimalsdecimals");
    /* --- Default Component --- */
    if (!data) return <span className="">{defaultValue}</span>;

    /* --- Render Component --- */
    return (
      <span className={className}>
        {commifyTokenBalance(data[0].toString(), decimals)}
      </span>
    );
  }, [data, decimals]);
};

PodRenderBalanceOf.defaultProps = {
  defaultValue: "0.00",
};

const PodRenderShareOf = ({ className, data, defaultValue, ...props }) => {
  if (!data) return <span className={className}>{defaultValue}%</span>;
  return <div></div>;
};

PodRenderShareOf.defaultProps = {
  defaultValue: "0",
};
