"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UrlRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
class UrlRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UrlRoutes');
    }
    configureRoutes() {
        this.app
            .route(`/urls`)
            .get((req, res) => {
            res.status(200).send(`List of urls`);
        })
            .post((req, res) => {
            res.status(200).send(`Post to urls`);
        });
        this.app
            .route(`/urls/:urlId`)
            .all((req, res, next) => {
            // middleware
            next();
        })
            .get((req, res) => {
            res.status(200).send(`GET requested for id ${req.params.urlId}`);
        })
            .put((req, res) => {
            res.status(200).send(`PUT requested for id ${req.params.urlId}`);
        })
            .patch((req, res) => {
            res.status(200).send(`PATCH requested for id ${req.params.urlId}`);
        })
            .delete((req, res) => {
            res.status(200).send(`DELETE requested for id ${req.params.urlId}`);
        });
        return this.app;
    }
}
exports.UrlRoutes = UrlRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJscy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXJscy91cmxzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQW9FO0FBR3BFLE1BQWEsU0FBVSxTQUFRLHlDQUFrQjtJQUMvQyxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxPQUFPLENBQUM7YUFDZCxHQUFHLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNuRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUVMLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLGNBQWMsQ0FBQzthQUNyQixHQUFHLENBQ0YsQ0FDRSxHQUFvQixFQUNwQixHQUFxQixFQUNyQixJQUEwQixFQUMxQixFQUFFO1lBQ0YsYUFBYTtZQUNiLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQyxDQUNGO2FBQ0EsR0FBRyxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUNuRSxDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNuRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ3JELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDckUsQ0FBQyxDQUFDO2FBQ0QsTUFBTSxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDdEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUMsQ0FBQztRQUVMLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUExQ0QsOEJBMENDIn0=