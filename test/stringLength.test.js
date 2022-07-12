const testString = require('../src/stringLength');

test('Testing for length', () => {
  expect(testString('Test')).toBe(4);
  expect(testString('Testing')).toBeLessThan(11);
  expect(testString('Tester')).toBeGreaterThan(0);
});
