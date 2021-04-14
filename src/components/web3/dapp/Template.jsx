import {
  useEthers,
  useEtherBalance,
  useBlockNumber,
  useConfig,
  useMulticallAddress,
  useChainState,
  useBlockMeta,
} from "@usedapp/core";
import { useMemo } from "react";

/**
 * @name
 * @param {Object} props
 */
export const AccountConnect = ({ className, ...props }) => {
  const chainstate = useChainState();
  const { activateBrowserWallet, account, activate } = useEthers();

  console.log(account, chainstate, "chainstatechainstate");

  return useMemo(() => {
    return (
      <>
        {account ? (
          <span className="">{account}</span>
        ) : (
          <button onClick={() => activateBrowserWallet()}> Connect </button>
        )}
      </>
    );
  }, [account]);
};
export default AccountConnect;
