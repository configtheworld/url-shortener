"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const url_controllers_1 = require("../controllers/url.controllers");
class UrlRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UrlRoutes');
    }
    configureRoutes() {
        this.app.get('/url/:short', url_controllers_1.redirectToUrl);
        this.app.post('/url', url_controllers_1.postUrl);
        return this.app;
    }
}
exports.UrlRoutes = UrlRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLnJvdXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3JvdXRlcy91cmwucm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlFQUFvRTtBQUVwRSxvRUFBd0U7QUFFeEUsTUFBYSxTQUFVLFNBQVEseUNBQWtCO0lBQy9DLFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSwrQkFBYSxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLHlCQUFPLENBQUMsQ0FBQztRQUUvQixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBWEQsOEJBV0MifQ==