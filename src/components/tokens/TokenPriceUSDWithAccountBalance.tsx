/* --- Global Modules --- */

/* --- Local Modules --- */
import { useGetCoinGeckoTokenPriceWithBalance } from "@hooks/useGetCoinGeckoTokenPriceWithBalance";
import { transformTokenToHuman } from "@src/helpers/blockchain";

/* ------------------------------- */
/* ------- File Interfaces ------- */
/* ------------------------------- */
interface TokenPriceUSDWithAccountBalanceProps {
  address: string | undefined;
  className: string | undefined;
  classNameSymbol: string | undefined;
  classNameValue: string | undefined;
  classNameBalance: string | undefined;
  displayUSDSymbol: Boolean;
  displayBalance: Boolean;
  displayPrice: Boolean;
}

/**
 * @name TokenPriceUSDWithAccountBalance
 * @param {Object} props
 */
export const TokenPriceUSDWithAccountBalance = ({
  className,
  classNameSymbol,
  classNameValue,
  classNameBalance,
  address,
  displayUSDSymbol,
  displayBalance,
  displayPrice,
}: TokenPriceUSDWithAccountBalanceProps) => {
  const balanceAndPrice = useGetCoinGeckoTokenPriceWithBalance(address);

  if (balanceAndPrice && balanceAndPrice.value)
    return (
      <span className={className}>
        {displayUSDSymbol ? <span className={classNameSymbol}>$</span> : null}
        <span className={classNameValue}>
          {balanceAndPrice.value.toString()}
        </span>
        {displayPrice && (
          <span className={classNameBalance}>
            Price: {balanceAndPrice.price}
          </span>
        )}
        {displayBalance && (
          <span className={classNameBalance}>
            Balance: {transformTokenToHuman(balanceAndPrice.balance)}
          </span>
        )}
      </span>
    );
  return null;
};

TokenPriceUSDWithAccountBalance.defaultProps = {
  address: undefined,
  className: undefined,
  classNameSymbol: undefined,
  classNameValue: undefined,
  displayUSDSymbol: false,
  displayBalance: false,
  displayPrice: false,
};

export default TokenPriceUSDWithAccountBalance;
