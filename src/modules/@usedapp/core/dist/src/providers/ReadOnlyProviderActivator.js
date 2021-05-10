"use strict";
exports.__esModule = true;
exports.ReadOnlyProviderActivator = void 0;
var network_connector_1 = require("@web3-react/network-connector");
var react_1 = require("react");
var hooks_1 = require("../hooks");
function ReadOnlyProviderActivator(_a) {
    var readOnlyChainId = _a.readOnlyChainId, readOnlyUrls = _a.readOnlyUrls;
    var _b = hooks_1.useEthers(), activate = _b.activate, account = _b.account, connectedChainId = _b.chainId, active = _b.active, connector = _b.connector;
    react_1.useEffect(function () {
        if (!active || (connector instanceof network_connector_1.NetworkConnector && connectedChainId !== readOnlyChainId)) {
            activate(new network_connector_1.NetworkConnector({ defaultChainId: readOnlyChainId, urls: readOnlyUrls || [] }));
        }
    }, [readOnlyChainId, readOnlyUrls, active, account, connectedChainId, connector]);
    return null;
}
exports.ReadOnlyProviderActivator = ReadOnlyProviderActivator;
//# sourceMappingURL=ReadOnlyProviderActivator.js.map