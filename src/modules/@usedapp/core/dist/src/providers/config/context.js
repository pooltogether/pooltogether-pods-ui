"use strict";
exports.__esModule = true;
exports.useConfig = exports.ConfigContext = void 0;
var react_1 = require("react");
var default_1 = require("../../model/config/default");
exports.ConfigContext = react_1.createContext(default_1.DEFAULT_CONFIG);
function useConfig() {
    return react_1.useContext(exports.ConfigContext);
}
exports.useConfig = useConfig;
//# sourceMappingURL=context.js.map