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
export const AccontConnect = ({ className, ...props }) => {
  const chainstate = useChainState();
  const { activateBrowserWallet, account, activate } = useEthers();
  const balance = useEtherBalance(account);
  const blocknumber = useBlockNumber();

  return useMemo(() => {
    return (
      <>
        <span className={className}>{blocknumber}</span>
        {!account && <button onClick={activateBrowserWallet}> Connect </button>}
      </>
    );
  }, [account]);
};
export default AccontConnect;
