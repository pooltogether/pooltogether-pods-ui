import { useMediaQuery } from "react-responsive";

export const isTabletOrMobile = useMediaQuery({
  query: "(max-width: 1224px)",
});

export const isDesktopOrLaptop = useMediaQuery({
  query: "(min-device-width: 1224px)",
});

export const isBigScreen = useMediaQuery({
  query: "(min-device-width: 1824px)",
});
