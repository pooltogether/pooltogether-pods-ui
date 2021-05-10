"use strict";
exports.__esModule = true;
exports.ChainStateProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var hooks_1 = require("../../hooks");
var context_1 = require("../blockNumber/context");
var context_2 = require("./context");
var chainStateReducer_1 = require("./chainStateReducer");
var callsReducer_1 = require("./callsReducer");
var multicall_1 = require("./multicall");
function ChainStateProvider(_a) {
    var children = _a.children, multicallAddresses = _a.multicallAddresses;
    var _b = hooks_1.useEthers(), library = _b.library, chainId = _b.chainId;
    var blockNumber = context_1.useBlockNumber();
    var _c = react_1.useReducer(callsReducer_1.callsReducer, []), calls = _c[0], dispatchCalls = _c[1];
    var _d = react_1.useReducer(chainStateReducer_1.chainStateReducer, {}), state = _d[0], dispatchState = _d[1];
    var addCalls = react_1.useCallback(function (calls) {
        dispatchCalls({ type: 'ADD_CALLS', calls: calls });
    }, [dispatchCalls]);
    var removeCalls = react_1.useCallback(function (calls) {
        dispatchCalls({ type: 'REMOVE_CALLS', calls: calls });
    }, [dispatchCalls]);
    var _e = hooks_1.useDebouncePair(calls, chainId, 50), debouncedCalls = _e[0], debouncedId = _e[1];
    var uniqueCalls = debouncedId === chainId ? getUnique(debouncedCalls) : [];
    var multicallAddress = chainId !== undefined ? multicallAddresses[chainId] : undefined;
    react_1.useEffect(function () {
        if (library && blockNumber !== undefined && chainId !== undefined) {
            if (!multicallAddress) {
                console.error("Missing multicall address for chain id " + chainId);
                return;
            }
            multicall_1.multicall(library, multicallAddress, blockNumber, uniqueCalls)
                .then(function (state) { return dispatchState({ type: 'FETCH_SUCCESS', blockNumber: blockNumber, chainId: chainId, state: state }); })["catch"](function (error) {
                console.error(error);
                dispatchState({ type: 'FETCH_ERROR', blockNumber: blockNumber, chainId: chainId, error: error });
            });
        }
    }, [library, blockNumber, chainId, multicallAddress, JSON.stringify(uniqueCalls)]);
    var value = chainId !== undefined ? state[chainId] : undefined;
    var provided = { value: value, multicallAddress: multicallAddress, addCalls: addCalls, removeCalls: removeCalls };
    return jsx_runtime_1.jsx(context_2.ChainStateContext.Provider, { value: provided, children: children }, void 0);
}
exports.ChainStateProvider = ChainStateProvider;
function getUnique(requests) {
    var unique = [];
    var _loop_1 = function (request) {
        if (!unique.find(function (x) { return x.address === request.address && x.data === request.data; })) {
            unique.push(request);
        }
    };
    for (var _i = 0, requests_1 = requests; _i < requests_1.length; _i++) {
        var request = requests_1[_i];
        _loop_1(request);
    }
    return unique;
}
//# sourceMappingURL=provider.js.map