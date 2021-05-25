import React from "react";
import classnames from "classnames";
import addSeconds from "date-fns/addSeconds";

import { useTranslation } from "@src/hooks/useTranslation";
import { subtractDates } from "@src/utils/subtractDates";
import { usePrizePeriodTimeLeft } from "src/hooks/usePrizePeriodTimeLeft";

const SECONDS_PER_DAY = 86400;
const EIGHT_HOURS_IN_SECONDS = 28800;

export const PodNewPrizeCountdown = (props) => {
  const { t } = useTranslation();
  const { pool, center, textAlign, textSize } = props;
  let flashy = props.flashy === false ? false : true;

  console.log(props, "propspropsprops");

  const { secondsLeft } = usePrizePeriodTimeLeft(pool);

  const currentDate = new Date(Date.now());
  const futureDate = addSeconds(currentDate, secondsLeft);
  const { days, hours, minutes, seconds } = subtractDates(
    futureDate,
    currentDate
  );

  let msg;
  if (pool.prize.isRngRequested) {
    return (
      <>
        <p
          className={classnames(textSize, "font-bold", {
            "text-flashy": flashy,
            "text-xs xs:text-sm sm:text-xl": !textSize,
            "text-right": !textAlign,
          })}
        >
          {t("prizeIsBeingAwarded")}
        </p>
      </>
    );
  }

  const daysArray = ("" + days).split("");
  const hoursArray = ("" + hours).split("");
  const minutesArray = ("" + minutes).split("");
  const secondsArray = ("" + seconds).split("");

  const textColor =
    secondsLeft >= SECONDS_PER_DAY
      ? "green"
      : secondsLeft >= EIGHT_HOURS_IN_SECONDS
      ? "orange"
      : "red";

  const LeftSideJsx = ({ digit }) => {
    return (
      <span
        className={`bg-teal bg-opacity-20 text-${textColor} font-bold rounded-sm`}
        style={{
          padding: "2px 8px",
          margin: "0 1px",
        }}
      >
        {digit}
      </span>
    );
  };

  const RightSideJsx = ({ digit }) => {
    return (
      <span
        className={`bg-teal bg-opacity-20 text-${textColor} font-bold rounded-sm`}
        style={{
          padding: "2px 8px",
          margin: "0 1px",
        }}
      >
        {digit}
      </span>
    );
  };

  const unitClasses = "opacity-60 text-inverse text-xxxs";
  const unitStyles = { paddingTop: 3 };

  return (
    <>
      <div
        className={classnames(textSize, "flex text-center", {
          "justify-center": center,
          "text-sm xs:text-xs sm:text-base": !textSize,
        })}
      >
        <div
          className="flex flex-col sm:mr-2"
          style={{
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <div className="flex">
            <LeftSideJsx digit={daysArray.length < 2 ? 0 : daysArray[0]} />
            <RightSideJsx
              digit={daysArray.length > 1 ? daysArray[1] : daysArray[0]}
            />
          </div>
          <div className={unitClasses} style={unitStyles}>
            {t("countdownDayShort")}
          </div>
        </div>
        <div
          className="flex flex-col"
          style={{
            paddingLeft: 2,
            paddingRight: 2,
          }}
        >
          <div className="flex">
            <LeftSideJsx digit={hoursArray.length < 2 ? 0 : hoursArray[0]} />
            <RightSideJsx
              digit={hoursArray.length > 1 ? hoursArray[1] : hoursArray[0]}
            />
          </div>
          <div className={unitClasses} style={unitStyles}>
            {t("countdownHourShort")}
          </div>
        </div>
        <div className={`px-0 sm:px-1 font-bold text-${textColor}`}>:</div>
        <div
          className="flex flex-col"
          style={{
            paddingLeft: 1,
            paddingRight: 2,
          }}
        >
          <div className="flex">
            <LeftSideJsx
              digit={minutesArray.length < 2 ? 0 : minutesArray[0]}
            />
            <RightSideJsx
              digit={
                minutesArray.length > 1 ? minutesArray[1] : minutesArray[0]
              }
            />
          </div>
          <div className={unitClasses} style={unitStyles}>
            {t("countdownMinuteShort")}
          </div>
        </div>
        <div className={`px-0 sm:px-1 font-bold text-${textColor}`}>:</div>
        <div
          className="flex flex-col"
          style={{
            paddingLeft: 1,
            paddingRight: 2,
          }}
        >
          <div className="flex">
            <LeftSideJsx
              digit={secondsArray.length < 2 ? 0 : secondsArray[0]}
            />
            <RightSideJsx
              digit={
                secondsArray.length > 1 ? secondsArray[1] : secondsArray[0]
              }
            />
          </div>
          <div className={unitClasses} style={unitStyles}>
            {t("countdownSecondShort")}
          </div>
        </div>
        {msg}
      </div>
    </>
  );
};
