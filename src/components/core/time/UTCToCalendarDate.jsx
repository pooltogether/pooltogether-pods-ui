import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

const UTCToCalendarDate = (props) => {
  const [utc] = useState(props.utc);
  const [date, setDate] = useState(0);

  useEffect(() => {
    const DateFromMillis = DateTime.fromISO(utc);
    if (DateFromMillis.isValid)
      setDate(DateFromMillis.toLocaleString(DateTime.DATE_FULL));
  }, [utc]);

  return date ? <span>{date}</span> : null;
};

export default UTCToCalendarDate;
