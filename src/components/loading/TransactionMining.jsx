/* --- Global Modules --- */
import idx from "idx";
import React, { useMemo } from "react";
import { getExplorerTransactionLink, useEthers } from "@usedapp/core";
/* --- Local Modules --- */
import { shortenTransactionHash } from "@src/utils/convert";
import { EtherscanLink, RubiksCube, Spacer } from "@components";

/**
 * @name TransactionMining
 * @param {Object} props
 */
export const TransactionMining = ({
  amount,
  state,
  action,
  symbol,
  ...props
}) => {
  const { chainId } = useEthers();
  const etherscanLink = getExplorerTransactionLink(
    state.transaction.hash,
    chainId
  );

  console.log(etherscanLink, "etherscanLink");

  return useMemo(() => {
    if (idx(state, (_) => _.status) == "Mining") {
      return (
        <div className="text-center">
          <span className="inline-block text-teal-600">
            <img
              className="inline-block"
              src="/images/access_time.png"
              width={14}
            />{" "}
            <span className="inline-block">
              Transaction may take few minutes.
            </span>
          </span>
          <Spacer className="my-10" />
          <div className="inline-block -ml-14" style={{ maxWidth: 100 }}>
            <RubiksCube />
          </div>
          <Spacer className="mt-20" />
          <div className="">
            <span className="text-2xl">
              {action} {amount} {symbol}
            </span>
          </div>
          <Spacer className="mt-4" />
          <div className="">
            <span className="block text-teal-600">
              Transaction Status: Pending...
            </span>
            <Spacer className="my-2" />
            <span className="block text-teal-600">
              <span className="mr-1">Etherscan:</span>
              {/* <a
                target="_blank"
                href={etherscanLink}
                className="underline"
                hash={idx(state, (_) => _.transaction.hash)}
              >
                {shortenTransactionHash(
                  idx(state, (_) => _.transaction.hash),
                  6
                )}
              </a> */}
              <EtherscanLink
                className="underline"
                hash={idx(state, (_) => _.transaction.hash)}
              >
                {shortenTransactionHash(
                  idx(state, (_) => _.transaction.hash),
                  6
                )}
              </EtherscanLink>
            </span>
          </div>
        </div>
      );
    }
    return null;
  }, [state]);
};
export default TransactionMining;
