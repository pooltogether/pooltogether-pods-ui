import { useMemo } from "react";
import { useEthers } from "@usedapp/core";

/**
 * @name AccountDeactivate
 * @param {Object} props
 */
export const AccountDeactivate = ({ className, ...props }) => {
  const { account, deactivate } = useEthers();

  const handleDesactivateWeb3Wallet = () => {
    deactivate();
    // Remove Default Login
    localStorage.removeItem("wallet-default");
  };

  return useMemo(() => {
    return (
      <>
        <button className={className} onClick={handleDesactivateWeb3Wallet}>
          {" "}
          Disconnect{" "}
        </button>
      </>
    );
  }, [account]);
};
export default AccountDeactivate;
