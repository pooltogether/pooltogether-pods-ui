/* --- Global Modules --- */
import { DateTime, Duration } from "luxon";
import { utils, BigNumber } from "ethers";

/* --- Local Modules --- */
import { isBigNumber, isPositiveBigNumber } from "@src/utils/is";
import {
  transformTokenToHuman,
  numberTrimDecimals,
} from "@src/helpers/blockchain";

/**
 * @name prizePoolWinningDate
 * @param {*} time
 */
export const prizePoolWinningDate = (time) => {
  const DateFromMillis = DateTime.fromMillis(time.mul(1000).toNumber());
  var duration = Duration.fromObject({ days: 7 });

  const NextRewardPeriod = DateFromMillis.plus(duration);
  return {
    relative: DateFromMillis.plus({ days: 7 }).toRelative({
      base: DateTime.DATETIME,
      round: false,
    }),
    unit: DateFromMillis.plus({ days: 7 }).toRelative({
      unit: "hours",
      round: false,
    }),
    calendar: DateFromMillis.plus({ days: 7 }).toLocaleString(
      DateTime.DATETIME_MED
    ),
  };
};

/**
 * @name podWinningOdds
 * @param {*} tickets
 * @param {*} totalTickets
 */
export const podWinningOdds = (tickets: BigNumber, totalTickets: BigNumber): BigNumber => {
  if(isPositiveBigNumber(tickets) && isPositiveBigNumber(totalTickets)) {
    const percentage = totalTickets.div(tickets)
    return percentage
  }
  return BigNumber.from(0)
};

/**
 * @name percentageOfPod
 * @param {*} tickets
 * @param {*} totalTickets
 */
export const percentageOfPod = (userShares, podTotalShares) => {
  const humanPercentage =
    transformTokenToHuman(userShares) / transformTokenToHuman(podTotalShares);
  const calculatePercentage = humanPercentage * 100;
  if (calculatePercentage) {
    return utils.commify(numberTrimDecimals(calculatePercentage, 3));
  }
  return 0;
};

/**
 * Calculates your share of the prize.
 * @name calculateUserPrizeWinningsFromWinningPod
 * @param {bignumber} userShares 
 * @param {bignumber} totalShares
 * @param {bignumber} prizePoolReward
 */
export function calculateUserPrizeWinningsFromWinningPod( userShares: BigNumber, totalShares: BigNumber, prizePoolReward: BigNumber ) {
  const ROUNDING = utils.parseEther('1')
  if(isBigNumber(userShares) && isBigNumber(totalShares) && totalShares.gt(0)) {
    const userPercentageSharesOfPod = userShares.mul(ROUNDING).div(totalShares);
    return prizePoolReward.mul(userPercentageSharesOfPod).div(ROUNDING)
  }
  return BigNumber.from(0)
}
