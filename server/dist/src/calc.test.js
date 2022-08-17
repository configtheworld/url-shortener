"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var calc_1 = __importDefault(require("./calc"));
describe('Calc', function () {
    test('should return 10 for add(6, 4)', function () {
        expect(calc_1.default.add(6, 4)).toBe(10);
    });
    test('should return 9 for add(10, -1)', function () {
        expect(calc_1.default.add(10, -1)).toBe(9);
    });
    test('should return 0', function () {
        expect(calc_1.default.add(100, -100)).toBe(0);
    });
    test('return defined value', function () {
        expect(calc_1.default.add(0, 0)).toBeDefined();
    });
});
//# sourceMappingURL=calc.test.js.map