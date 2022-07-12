const testReverse = require('../src/reverseString');

test('Testing the reverse', () => {
  expect(testReverse('hello')).toBe('olleh');
})