const generateParentheses = require('./problem');

describe('generateParentheses', () => {
    // Simple cases
    test('n = 0 should return empty array', () => {
        expect(generateParentheses(0)).toEqual([]);
    });

    test('n = 1 should return one pair', () => {
        expect(generateParentheses(1)).toEqual(['()']);
    });

    // Normal cases
    test('n = 2 should return all valid combinations', () => {
        expect(generateParentheses(2).sort()).toEqual(['(())', '()()'].sort());
    });

    test('n = 3 should return all valid combinations', () => {
        const expected = ['((()))', '(()())', '(())()', '()(())', '()()()'];
        expect(generateParentheses(3).sort()).toEqual(expected.sort());
    });

    // Edge cases
    test('negative n should return empty array', () => {
        expect(generateParentheses(-1)).toEqual([]);
    });

    test('results should be unique', () => {
        const result = generateParentheses(2);
        expect(new Set(result).size).toBe(result.length);
    });
});
