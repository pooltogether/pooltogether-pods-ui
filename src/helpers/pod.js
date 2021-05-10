import { DateTime, Duration } from "luxon";
import { ethers, constants, utils, BigNumber } from "ethers";
import {
  commifyTokenBalance,
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
export const podWinningOdds = (tickets, totalTickets) => {
  const humanPercentage =
    transformTokenToHuman(tickets) / transformTokenToHuman(totalTickets);
  const calculatePercentage = humanPercentage * 100;
  return numberTrimDecimals(calculatePercentage, 5);
};

/**
 * @name percentageOfPod
 * @param {*} tickets
 * @param {*} totalTickets
 */
export const percentageOfPod = (shares, balance) => {
  const humanPercentage =
    transformTokenToHuman(shares) / transformTokenToHuman(balance);
  const calculatePercentage = humanPercentage * 100;
  if (calculatePercentage) {
    return utils.commify(numberTrimDecimals(calculatePercentage, 3));
  }
  return 0;

  // Calculating w/ BigNumbers returns 0
  // @TODO Find bug for dividing numbers 18 decimals.
  const percentage = shares.div(balance);
  const calculated = percentage.mul(100).toString();
  return calculated;
};

/**
 * Calculates the size of the prize.
 * @name calculatePrize
 * @param {bignumber} balance The current Pool#balance
 * @param {bignumber} accountedBalance The current Pool#accountedBalance
 * @param {bignumber} feeFraction Fraction represented as fixed point 18 (as in wei)
 */
export function calculatePrize(
  accountedBalance,
  balance,
  feeFraction,
  decimals
) {
  const interestAccrued = balance.sub(accountedBalance);
  if (interestAccrued) {
    // const fee = interestAccrued.mul(feeFraction).div(constants.WeiPerEther);
    // Get correct feeFraction
    // return transformTokenToHuman(interestAccrued.sub(fee));

    return transformTokenToHuman(interestAccrued, decimals);
  }
  return 1;
}

/**
 * Calculates your share of the prize.
 * @name calculateYourPrizeWinnings
 * @param {bignumber} balance The current Pool#balance
 * @param {bignumber} accountedBalance The current Pool#accountedBalance
 * @param {bignumber} feeFraction Fraction represented as fixed point 18 (as in wei)
 */
export function calculateYourPrizeWinnings(
  accountedBalance,
  balance,
  feeFraction,
  sharePercentage
) {
  const interestAccrued = balance.sub(accountedBalance);
  const fee = interestAccrued.mul(feeFraction).div(constants.WeiPerEther);
  // Get correct feeFraction
  // return transformTokenToHuman(interestAccrued.sub(fee));

  const podSharePercentage = BigNumber.from(
    Number.parseFloat(sharePercentage).toFixed(0)
  );

  return Number.parseFloat(
    transformTokenToHuman(interestAccrued.mul(podSharePercentage).div(100))
  ).toFixed(0);
  // return commifyTokenBalance(interestAccrued.mul(podSharePercentage).div(100));
}

const calculateTotalPodWinngs = ({
  underlyingTokenValueUsd,
  totalTicketSupply,
}) => {};

const calculatePodPoolDepositAPR = ({
  underlyingTokenValueUsd,
  totalTicketSupply,
}) => {};

const calculatePodUserPoolDepositAPR = ({
  underlyingTokenValueUsd,
  totalTicketSupply,
}) => {};
