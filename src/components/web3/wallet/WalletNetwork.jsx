import React from "react";
import { useEthers } from "@usedapp/core";
import styles from "./WalletNetwork.module.css";

/**
 * @name WalletNetwork
 * @param {Object} props
 */
export const WalletNetwork = ({ address, isLink, sx, trim, ...props }) => {
  const { chainId } = useEthers();

  if (chainId === 1) return <span className={styles.mainnet} {...props} />;

  return <span className={styles.testnet} {...props} />;
};

export default WalletNetwork;

WalletNetwork.defaultProps = {
  sx: {},
};
