const isValid = require('./problem');

describe('isValid', () => {
  // Simple cases
  test('empty string should return true', () => {
    expect(isValid('')).toBe(true);
  });

  test('single pair of parentheses', () => {
    expect(isValid('()')).toBe(true);
  });

  test('mismatched pair of brackets', () => {
    expect(isValid('(]')).toBe(false);
  });

  // Normal cases
  test('nested valid brackets', () => {
    expect(isValid('{[()]}')).toBe(true);
  });

  test('unbalanced brackets', () => {
    expect(isValid('{[()]')).toBe(false);
  });

  // Complex cases
  test('multiple valid pairs', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('multiple mismatched pairs', () => {
    expect(isValid('([)]')).toBe(false);
  });

  // Edge cases
  test('only opening brackets', () => {
    expect(isValid('((((')).toBe(false);
  });

  test('only closing brackets', () => {
    expect(isValid('))))')).toBe(false);
  });

  test('long valid sequence', () => {
    expect(isValid('({[]}){[()]}')).toBe(true);
  });

  test('long invalid sequence', () => {
    expect(isValid('({[}]){[()]}')).toBe(false);
  });
});
