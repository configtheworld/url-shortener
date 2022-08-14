import calc from './calc';
describe('Calc', () => {
  test('should return 10 for add(6, 4)', () => {
    expect(calc.add(6, 4)).toBe(10);
  });
  test('should return 9 for add(10, -1)', () => {
    expect(calc.add(10, -1)).toBe(9);
  });
  test('should return 0', () => {
    expect(calc.add(100, -100)).toBe(0);
  });
  test('return defined value', () => {
    expect(calc.add(0, 0)).toBeDefined();
  });
});
