/* --- Global Modules --- */

/* --- Local Modules --- */
import { useGetCoinGeckoTokenPrice } from "@hooks/useGetCoinGeckoTokenPrice";

/* ------------------------------- */
/* ------- File Interfaces ------- */
/* ------------------------------- */
interface TokenPriceUSDProps {
  address: string;
  className: string;
  classNameSymbol: string;
  classNameValue: string;
  includeSymbol: Boolean;
}

/**
 * @name TokenPriceUSD
 * @param {Object} props
 */
export const TokenPriceUSD = ({
  className,
  classNameSymbol,
  classNameValue,
  address,
  includeSymbol,
}: TokenPriceUSDProps) => {
  const price = useGetCoinGeckoTokenPrice(address);

  if (price)
    return (
      <span className={className}>
        {includeSymbol ? <span className={classNameSymbol}>$</span> : null}
        <span className={classNameValue}>{price}</span>
      </span>
    );
  return null;
};

TokenPriceUSD.defaultProps = {
  address: undefined,
  className: undefined,
  classNameSymbol: undefined,
  classNameValue: undefined,
  includeSymbol: false,
};

export default TokenPriceUSD;
