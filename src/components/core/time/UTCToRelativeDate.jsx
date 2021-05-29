import React, { useEffect, useState } from 'react'
import { DateTime } from 'luxon'

const UTCToRelativeDate = (props) => {
  const [date] = useState(props.date)
  const [relative, setRelative] = useState(0)

  useEffect(() => {
    const DateFromMillis = DateTime.fromISO(date)
    if (DateFromMillis.isValid) setRelative(DateFromMillis.toRelative())
  }, [date])

  return relative ? <span className={props.className}>{relative}</span> : null
}

export default UTCToRelativeDate
