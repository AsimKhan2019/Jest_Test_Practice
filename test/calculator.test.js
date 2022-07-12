const calcOperations = require('../src/calculator');

describe('Addition', () => {
  test('First Test', () => {
    expect(calcOperations.sum(11,13)).toBe(24);
  });

  test('Second Test', () => {
    expect(calcOperations.sum(25,25)).toBe(50);
  });

  test('Third Test', () => {
    expect(calcOperations.sum(20,4)).toBe(24);
  });
});

describe('Subtraction', () => {
  test('First Test', () => {
    expect(calcOperations.minus(13,11)).toBe(2);
  });

  test('Second Test', () => {
    expect(calcOperations.minus(25,25)).toBe(0);
  });

  test('Third Test', () => {
    expect(calcOperations.minus(20,4)).toBe(16);
  });
});

describe('Multiplication', () => {
  test('First Test', () => {
    expect(calcOperations.multiply(1,3)).toBe(3);
  });

  test('Second Test', () => {
    expect(calcOperations.multiply(10,10)).toBe(100);
  });

  test('Third Test', () => {
    expect(calcOperations.multiply(20,4)).toBe(80);
  });
});

describe('Division', () => {
  test('First Test', () => {
    expect(calcOperations.divide(9,3)).toBe(3);
  });

  test('Second Test', () => {
    expect(calcOperations.divide(10,10)).toBe(1);
  });

  test('Third Test', () => {
    expect(calcOperations.divide(20,4)).toBe(5);
  });
});

