/* --- Global Modules --- */
import { useEffect, useMemo } from "react";
import { useEthers } from "@usedapp/core";

/* --- Local Modules --- */
import { injected } from "@connectors";

/**
 * @name AccountConnect
 * @param {Object} props
 */
export const AccountConnect = ({ className, classNameChildren, children }) => {
  const { account, activate } = useEthers();

  /* ----------------------- */
  /* --- Component Hooks --- */
  /* ----------------------- */

  // Establish Previous Connection with Authorized Wallet using the wallet-default localstorage value
  useEffect(() => {
    injected.isAuthorized().then((isAuthorized) => {
      const defaultWallet = localStorage.getItem("wallet-default");
      if (isAuthorized && defaultWallet == "MetaMask") {
        activate(injected);
      }
    });
  }, [activate]);

  return useMemo(() => {
    return (
      <>
        {account ? (
          <div className={classNameChildren}>{children[1]}</div>
        ) : (
          <span>{children[0]}</span>
        )}
      </>
    );
  }, [account]);
};
export default AccountConnect;
