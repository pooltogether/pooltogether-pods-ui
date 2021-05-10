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
exports.ConfigProvider = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var default_1 = require("../../model/config/default");
var context_1 = require("./context");
function ConfigProvider(_a) {
    var config = _a.config, children = _a.children;
    return jsx_runtime_1.jsx(context_1.ConfigContext.Provider, { value: __assign(__assign({}, default_1.DEFAULT_CONFIG), config), children: children }, void 0);
}
exports.ConfigProvider = ConfigProvider;
//# sourceMappingURL=provider.js.map