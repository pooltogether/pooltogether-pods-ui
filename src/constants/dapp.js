import { ChainId } from "@usedapp/core";

export const dappConfig = {
  readOnlyChainId: 1337,
  readOnlyUrls: {
    [ChainId.Mainnet]:
      "https://mainnet.infura.io/v3/62687d1a985d4508b2b7a24827551934",
    1337: "http://localhost:8545",
  },
  supportedChains: [1, 2, 3, 4, 5, 1337],
  multicallAddresses: {
    1337: "0xeefba1e63905ef1d7acba5a8513c70307c1ce441",
  },
};

export default dappConfig;
