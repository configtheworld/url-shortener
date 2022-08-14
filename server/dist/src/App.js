"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class ApiApp {
    constructor() {
        this.application = (0, express_1.default)();
        this.setupGlobalMiddleware();
        this.setupRouters();
    }
    start(port = 3000) {
        return this.application.listen(port, () => {
            // eslint-disable-next-line no-console
            console.log(`listening on port ${port}`);
        });
    }
    getApplication() {
        return this.application;
    }
    setupGlobalMiddleware() {
        this.application.use(express_1.default.json());
    }
    setupRouters() {
        this.application.get('/', (_, res) => {
            res.json({ message: 'Url-shortener' });
        });
        // Setup our router later
    }
}
exports.default = new ApiApp();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUErQztBQUUvQyxNQUFNLE1BQU07SUFHVjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBQSxpQkFBTyxHQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCxLQUFLLENBQUMsT0FBd0IsSUFBSTtRQUNoQyxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7WUFDeEMsc0NBQXNDO1lBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLElBQUksRUFBRSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBRU8scUJBQXFCO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU8sWUFBWTtRQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDbkMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBRUgseUJBQXlCO0lBQzNCLENBQUM7Q0FDRjtBQUVELGtCQUFlLElBQUksTUFBTSxFQUFFLENBQUMifQ==