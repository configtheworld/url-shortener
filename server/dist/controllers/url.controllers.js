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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUrl = exports.redirectToUrl = void 0;
function redirectToUrl(_req, _res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        _res.status(200).send('redirecting from short url to actual url');
    });
}
exports.redirectToUrl = redirectToUrl;
function postUrl(_req, _res, _next) {
    return __awaiter(this, void 0, void 0, function* () {
        _res.status(200).send('short url created');
    });
}
exports.postUrl = postUrl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLmNvbnRyb2xsZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvdXJsLmNvbnRyb2xsZXJzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUVBLFNBQXNCLGFBQWEsQ0FDakMsSUFBcUIsRUFDckIsSUFBc0IsRUFDdEIsS0FBMkI7O1FBRTNCLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLDBDQUEwQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztDQUFBO0FBTkQsc0NBTUM7QUFFRCxTQUFzQixPQUFPLENBQzNCLElBQXFCLEVBQ3JCLElBQXNCLEVBQ3RCLEtBQTJCOztRQUUzQixJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Q0FBQTtBQU5ELDBCQU1DIn0=