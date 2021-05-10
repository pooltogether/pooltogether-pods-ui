"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.useContractFunction = exports.connectContractToSigner = void 0;
var react_1 = require("react");
var providers_1 = require("../providers");
var useEthers_1 = require("./useEthers");
function connectContractToSigner(contract, options, library) {
    if (contract.signer) {
        return contract;
    }
    if (options === null || options === void 0 ? void 0 : options.signer) {
        return contract.connect(options.signer);
    }
    if (library === null || library === void 0 ? void 0 : library.getSigner()) {
        return contract.connect(library.getSigner());
    }
    throw new TypeError('No signer available in contract, options or library');
}
exports.connectContractToSigner = connectContractToSigner;
function useContractFunction(contract, functionName, options) {
    var _this = this;
    var _a = react_1.useState({ status: 'None' }), state = _a[0], setState = _a[1];
    var addTransaction = providers_1.useTransactionsContext().addTransaction;
    var _b = useEthers_1.useEthers(), library = _b.library, chainId = _b.chainId;
    var transaction;
    var send = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return __awaiter(_this, void 0, void 0, function () {
            var contractWithSigner, receipt, e_1, errorMessage;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!chainId) {
                            return [2 /*return*/];
                        }
                        contractWithSigner = connectContractToSigner(contract, options, library);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, contractWithSigner[functionName].apply(contractWithSigner, args)];
                    case 2:
                        transaction = _b.sent();
                        setState({ transaction: transaction, status: 'Mining', chainId: chainId });
                        addTransaction({
                            transaction: transaction,
                            submittedAt: Date.now(),
                            transactionName: options === null || options === void 0 ? void 0 : options.transactionName
                        });
                        return [4 /*yield*/, transaction.wait()];
                    case 3:
                        receipt = _b.sent();
                        setState({ receipt: receipt, transaction: transaction, status: 'Success', chainId: chainId });
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _b.sent();
                        errorMessage = (_a = e_1.reason) !== null && _a !== void 0 ? _a : e_1.message;
                        if (transaction) {
                            setState({ status: 'Fail', transaction: transaction, receipt: e_1.receipt, errorMessage: errorMessage, chainId: chainId });
                        }
                        else {
                            setState({ status: 'Exception', errorMessage: errorMessage, chainId: chainId });
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return { send: send, state: state };
}
exports.useContractFunction = useContractFunction;
//# sourceMappingURL=useContractFunction.js.map