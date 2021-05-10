"use strict";
exports.__esModule = true;
exports.isTestChain = exports.getChainName = exports.getExplorerTransactionLink = exports.getExplorerAddressLink = void 0;
var constants_1 = require("../constants");
function etherscanNetworkPrefix(chainId) {
    switch (chainId) {
        case constants_1.ChainId.Mainnet:
            return "";
        case constants_1.ChainId.Ropsten:
        case constants_1.ChainId.Kovan:
        case constants_1.ChainId.Rinkeby:
        case constants_1.ChainId.Goerli:
            return getChainName(chainId).toLocaleLowerCase() + '.';
    }
}
function getExplorerAddressLink(address, chainId) {
    switch (chainId) {
        case constants_1.ChainId.Mainnet:
        case constants_1.ChainId.Ropsten:
        case constants_1.ChainId.Kovan:
        case constants_1.ChainId.Rinkeby:
        case constants_1.ChainId.Goerli:
            return "https://" + etherscanNetworkPrefix(chainId) + "etherscan.io/address/" + address;
        case constants_1.ChainId.xDai:
            return "https://blockscout.com/poa/xdai/address/" + address + "/transactions";
    }
}
exports.getExplorerAddressLink = getExplorerAddressLink;
function getExplorerTransactionLink(transactionHash, chainId) {
    switch (chainId) {
        case constants_1.ChainId.Mainnet:
        case constants_1.ChainId.Ropsten:
        case constants_1.ChainId.Kovan:
        case constants_1.ChainId.Rinkeby:
        case constants_1.ChainId.Goerli:
            return "https://" + etherscanNetworkPrefix(chainId) + "etherscan.io/tx/" + transactionHash;
        case constants_1.ChainId.xDai:
            return "https://blockscout.com/poa/xdai/tx/" + transactionHash + "/internal-transactions";
    }
}
exports.getExplorerTransactionLink = getExplorerTransactionLink;
function getChainName(chainId) {
    return constants_1.CHAIN_NAMES[chainId];
}
exports.getChainName = getChainName;
function isTestChain(chainId) {
    return constants_1.TEST_CHAINS.includes(chainId);
}
exports.isTestChain = isTestChain;
//# sourceMappingURL=chain.js.map