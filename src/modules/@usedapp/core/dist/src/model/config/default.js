"use strict";
exports.__esModule = true;
exports.DEFAULT_CONFIG = void 0;
var constants_1 = require("../../constants");
exports.DEFAULT_CONFIG = {
    pollingInterval: 15000,
    supportedChains: [constants_1.ChainId.Mainnet, constants_1.ChainId.Goerli, constants_1.ChainId.Kovan, constants_1.ChainId.Rinkeby, constants_1.ChainId.Ropsten, constants_1.ChainId.xDai],
    notifications: {
        checkInterval: 500,
        expirationPeriod: 5000
    }
};
//# sourceMappingURL=default.js.map