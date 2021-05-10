import { useMemo } from "react";
import { useEthers } from "@usedapp/core";

/**
 * @name
 * @param {Object} props
 */
export const AccountConnect = ({ className, ...props }) => {
  const { activateBrowserWallet, account } = useEthers();

  return useMemo(() => {
    return (
      <>
        {account ? (
          <span className="">{account}</span>
        ) : (
          <button onClick={() => activateBrowserWallet()}>
            {" "}
            Connect to App
          </button>
        )}
      </>
    );
  }, [account]);
};
export default AccountConnect;
