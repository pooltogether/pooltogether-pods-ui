import { BigNumber } from "@ethersproject/bignumber/lib/bignumber";
import { useTimeCountdown } from "@src/hooks/useTimeCountdown";
import { getSecondsSinceEpoch } from "@src/utils/getSecondsSinceEpoch";

export const usePrizePeriodTimeLeft = (pool) => {
  console.log(pool, "poolpoolpool");

  const prizePeriodDurationInSeconds = BigNumber.from(
    pool.prize.prizePeriodSeconds
  ).toNumber();
  const prizePeriodStartedAtInSeconds = BigNumber.from(
    pool.prize.prizePeriodStartedAt
  ).toNumber();
  const currentTimeInSeconds = getSecondsSinceEpoch();

  const secondsSinceStartOfPrizePeriod =
    currentTimeInSeconds - prizePeriodStartedAtInSeconds;
  const initialSecondsLeft =
    prizePeriodDurationInSeconds - secondsSinceStartOfPrizePeriod;

  return useTimeCountdown(initialSecondsLeft);
};
