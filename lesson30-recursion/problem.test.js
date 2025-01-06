const sumArrayRecursively = require('./problem');

describe('sumArrayRecursively', () => {
  test('returns 0 for an empty array', () => {
    expect(sumArrayRecursively([])).toBe(0);
  });

  test('returns 1 for an array with one element [1]', () => {
    expect(sumArrayRecursively([1])).toBe(1);
  });

  test('returns the correct sum for multiple elements', () => {
    expect(sumArrayRecursively([1, 2, 3])).toBe(6);
    expect(sumArrayRecursively([5, 5, 5, 5])).toBe(20);
  });

  test('works with negative numbers', () => {
    expect(sumArrayRecursively([-1, -2, -3])).toBe(-6);
  });

  test('works with mixed positive and negative numbers', () => {
    expect(sumArrayRecursively([-1, 2, -3, 4])).toBe(2);
  });
});
