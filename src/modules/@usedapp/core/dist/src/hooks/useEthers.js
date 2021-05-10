"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useEthers = void 0;
var core_1 = require("@web3-react/core");
var react_1 = require("react");
var context_1 = require("../providers/config/context");
var injected_connector_1 = require("@web3-react/injected-connector");
function useEthers() {
    var result = core_1.useWeb3React();
    var supportedChains = context_1.useConfig().supportedChains;
    var activateBrowserWallet = react_1.useMemo(function () {
        var injected = new injected_connector_1.InjectedConnector({ supportedChainIds: supportedChains });
        return function () { return result.activate(injected); };
    }, [supportedChains]);
    return __assign(__assign({}, result), { activateBrowserWallet: activateBrowserWallet });
}
exports.useEthers = useEthers;
//# sourceMappingURL=useEthers.js.map