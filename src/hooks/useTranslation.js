export const useTranslation = () => {
  const t = (lKey) => {
    switch (lKey) {
      case "prizeIsBeingAwarded":
        return null;
      case "prizeAwardedSoon":
        return null;
      case "numDays":
        return "DAY";
      case "numHours":
        return "HR";
      case "numMinutes":
        return "MIN";
      case "numSeconds":
        return "SEC";
      case "beingAwarded":
        return "PROCESSING";
      case "numDaysShort":
        return "DAY";
      case "numHoursShort":
        return "HR";
      case "numMinutesShort":
        return "MIN";
      case "numSecondsShort":
        return "SEC";
      case "countdownDayShort":
        return "DAY";
      case "countdownHourShort":
        return "HR";
      case "countdownMinuteShort":
        return "MIN";
      case "countdownSecondShort":
        return "SEC";
      default:
        break;
    }
  };

  return { t };
};
