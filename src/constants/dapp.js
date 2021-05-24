import { ChainId } from "@usedapp/core";
import { NETWORK_URL_MAINNET, NETWORK_URL_HARDHAT } from "@src/connectors";

export const dappConfig = {
  readOnlyChainId: ChainId.Mainnet,
  readOnlyUrls: {
    [ChainId.Mainnet]: NETWORK_URL_MAINNET,
    1337: NETWORK_URL_HARDHAT,
  },
  supportedChains: [1, 2, 3, 4, 5, 1337],
  multicallAddresses: {
    1337: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
  },
};

export default dappConfig;
