"use strict";
exports.__esModule = true;
exports.useContractCalls = exports.useContractCall = void 0;
var react_1 = require("react");
var useChainCalls_1 = require("./useChainCalls");
function useContractCall(call) {
    var callData = call && call.args.every(function (arg) { return arg !== undefined; }) && call.abi.encodeFunctionData(call.method, call.args);
    var result = useChainCalls_1.useChainCall(call && callData && { address: call.address, data: callData });
    if (result === '0x') {
        console.warn("Invalid contract call: address=" + (call && call.address) + " method=" + (call && call.method) + " args=" + (call && call.args));
        return undefined;
    }
    return react_1.useMemo(function () { return (call && result !== undefined ? call.abi.decodeFunctionResult(call.method, result) : undefined); }, [result]);
}
exports.useContractCall = useContractCall;
function useContractCalls(calls) {
    var results = useChainCalls_1.useChainCalls(calls.map(function (call) { return ({
        address: call.address,
        data: call.abi.encodeFunctionData(call.method, call.args)
    }); }));
    return react_1.useMemo(function () {
        return results.map(function (result, idx) {
            return result ? calls[idx].abi.decodeFunctionResult(calls[idx].method, result) : undefined;
        });
    }, [results]);
}
exports.useContractCalls = useContractCalls;
//# sourceMappingURL=useContractCall.js.map