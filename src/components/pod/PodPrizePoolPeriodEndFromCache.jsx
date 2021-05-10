import { DateTime, Duration } from "luxon";
import {
  convertNumberToBigNumber,
  convertBigNumberToUSD,
} from "@src/utils/convert";
import { useMemo } from "react";

/**
 * @name PodPrizePoolPeriodEndFromCache
 * @param {Object} props
 */
export const PodPrizePoolPeriodEndFromCache = ({ number, displayType }) => {
  const secondsToEnd = convertNumberToBigNumber(number);

  const [endPeriod, calendar] = useMemo(() => {
    const date = DateTime.local();

    // Days | Relative
    const relative = date.plus({ seconds: secondsToEnd }).toRelative({
      base: DateTime.DATETIME,
      round: false,
    });

    // Calendar | Datetime Medium
    const calendar = date
      .plus({ days: 7 })
      .toLocaleString(DateTime.DATETIME_MED);

    return [relative, calendar];
  }, [secondsToEnd]);

  switch (displayType) {
    case "relative":
      return <span className="">{endPeriod}</span>;
    case "calendar":
      return <span className="">{calendar}</span>;
    default:
      return <span className="">{endPeriod}</span>;
  }
};
export default PodPrizePoolPeriodEndFromCache;
