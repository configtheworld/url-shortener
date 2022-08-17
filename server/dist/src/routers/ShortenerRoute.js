"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ShortenerRoute = /** @class */ (function () {
    function ShortenerRoute() {
        this.router = (0, express_1.Router)();
        this.setupRouter();
    }
    ShortenerRoute.prototype.setupRouter = function () {
        throw new Error('Not implemented yet!');
    };
    ShortenerRoute.prototype.getRouter = function () {
        return this.router;
    };
    return ShortenerRoute;
}());
exports.default = new ShortenerRoute();
//# sourceMappingURL=ShortenerRoute.js.map