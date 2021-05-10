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
exports.chainStateReducer = void 0;
function chainStateReducer(state, action) {
    var _a, _b;
    var _c;
    if (state === void 0) { state = {}; }
    var current = (_c = state[action.chainId]) === null || _c === void 0 ? void 0 : _c.blockNumber;
    if (!current || action.blockNumber >= current) {
        if (action.type === 'FETCH_SUCCESS') {
            return __assign(__assign({}, state), (_a = {}, _a[action.chainId] = { blockNumber: action.blockNumber, state: action.state }, _a));
        }
        else if (action.type === 'FETCH_ERROR') {
            return __assign(__assign({}, state), (_b = {}, _b[action.chainId] = __assign(__assign({}, state[action.chainId]), { blockNumber: action.blockNumber, error: action.error }), _b));
        }
    }
    return state;
}
exports.chainStateReducer = chainStateReducer;
//# sourceMappingURL=chainStateReducer.js.map