const checkText = require('../src/capitalizeText');

test('Capitalizing the first letter', () => {
  expect(checkText('my name is')).toBe('My name is');
  expect(checkText('')).toBe(undefined);
  expect(checkText()).toBe(undefined);
})