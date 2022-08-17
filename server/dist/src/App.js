"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ApiApp = /** @class */ (function () {
    function ApiApp() {
        this.application = (0, express_1.default)();
        this.setupGlobalMiddleware();
        this.setupRouters();
    }
    ApiApp.prototype.start = function (port) {
        if (port === void 0) { port = 3000; }
        return this.application.listen(port, function () {
            // eslint-disable-next-line no-console
            console.log("listening on port ".concat(port));
        });
    };
    ApiApp.prototype.getApplication = function () {
        return this.application;
    };
    ApiApp.prototype.setupGlobalMiddleware = function () {
        this.application.use(express_1.default.json());
    };
    ApiApp.prototype.setupRouters = function () {
        this.application.get('/', function (_, res) {
            res.json({ message: 'Url-shortener' });
        });
        // Setup our router later
    };
    return ApiApp;
}());
exports.default = new ApiApp();
//# sourceMappingURL=App.js.map