"use strict";
exports.__esModule = true;
exports.useChainCall = exports.useChainCalls = void 0;
var react_1 = require("react");
var context_1 = require("../providers/chainState/context");
function useChainCalls(calls) {
    var _a = react_1.useContext(context_1.ChainStateContext), addCalls = _a.addCalls, removeCalls = _a.removeCalls, value = _a.value;
    react_1.useEffect(function () {
        addCalls(calls);
        return function () { return removeCalls(calls); };
    }, [JSON.stringify(calls), addCalls, removeCalls]);
    return calls.map(function (_a) {
        var _b, _c;
        var address = _a.address, data = _a.data;
        return (_c = (_b = value === null || value === void 0 ? void 0 : value.state) === null || _b === void 0 ? void 0 : _b[address]) === null || _c === void 0 ? void 0 : _c[data];
    });
}
exports.useChainCalls = useChainCalls;
function useChainCall(call) {
    var result = useChainCalls(call ? [call] : [])[0];
    return result;
}
exports.useChainCall = useChainCall;
//# sourceMappingURL=useChainCalls.js.map