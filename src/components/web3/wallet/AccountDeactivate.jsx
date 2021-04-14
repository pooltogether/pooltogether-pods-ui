import { useMemo } from "react";
import { useEthers } from "@usedapp/core";

/**
 * @name AccountDeactivate
 * @param {Object} props
 */
export const AccountDeactivate = ({ className, ...props }) => {
  const { account, deactivate } = useEthers();

  return useMemo(() => {
    return (
      <>
        <button className={className} onClick={deactivate}>
          {" "}
          Disconnect{" "}
        </button>
      </>
    );
  }, [account]);
};
export default AccountDeactivate;
