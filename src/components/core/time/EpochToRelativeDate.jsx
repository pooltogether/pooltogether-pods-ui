import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

/**
 * @name EpochToRelativeDate
 * @param {*} props
 */
export const EpochToRelativeDate = ({ className, epoch, ...props }) => {
  const SecondsToMill = 1000;
  const [relative, setRelative] = useState(0);

  useEffect(() => {
    const DateFromMillis = DateTime.fromMillis(epoch);
    if (DateFromMillis.isValid) setRelative(DateFromMillis.toRelative());
  }, [epoch]);

  return relative ? <span className={className}>{relative}</span> : null;
};

export default EpochToRelativeDate;
