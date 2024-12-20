const searchRotated = require('./problem');

describe('searchRotated', () => {
    // Simple cases
    test('empty array should return -1', () => {
        expect(searchRotated([], 5)).toBe(-1);
    });

    test('single element array - target exists', () => {
        expect(searchRotated([1], 1)).toBe(0);
    });

    test('single element array - target does not exist', () => {
        expect(searchRotated([1], 0)).toBe(-1);
    });

    // Normal cases
    test('rotated array - target in first half', () => {
        expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 5)).toBe(1);
    });

    test('rotated array - target in second half', () => {
        expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
    });

    // Complex cases
    test('rotated array - target at pivot', () => {
        expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 7)).toBe(3);
    });

    test('rotated array - target after pivot', () => {
        expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 1)).toBe(5);
    });

    // Edge cases
    test('non-rotated array', () => {
        expect(searchRotated([1, 2, 3, 4, 5], 3)).toBe(2);
    });

    test('target not in array', () => {
        expect(searchRotated([4, 5, 6, 7, 0, 1, 2], 3)).toBe(-1);
    });
});
