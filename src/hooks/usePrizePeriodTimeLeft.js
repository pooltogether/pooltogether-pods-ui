import { BigNumber } from "@ethersproject/bignumber/lib/bignumber";
import { useTimeCountdown } from "@src/hooks/useTimeCountdown";
import { getSecondsSinceEpoch } from "@src/utils/getSecondsSinceEpoch";
import idx from "idx";

export const usePrizePeriodTimeLeft = (pool) => {
  if (
    idx(pool, (_) => _.prize.prizePeriodSeconds) &&
    idx(pool, (_) => _.prize.prizePeriodStartedAt)
  ) {
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
  } else {
    return useTimeCountdown(0);
  }
};
