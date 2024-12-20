const twoSum = require('./problem');

describe('twoSum', () => {
    // Simple cases
    test('basic case with positive numbers', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });

    test('basic case with negative numbers', () => {
        expect(twoSum([-1, -2, -3, -4], -7)).toEqual([2, 3]);
    });

    // Normal cases
    test('numbers not in order', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    test('target sum in middle of array', () => {
        expect(twoSum([1, 2, 3, 4, 5], 7)).toEqual([2, 3]);
    });

    // Complex cases
    test('larger numbers', () => {
        expect(twoSum([1000, 2000, 3000], 5000)).toEqual([1, 2]);
    });

    test('repeated numbers', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });

    // Edge cases
    test('minimal length array', () => {
        expect(twoSum([1, 2], 3)).toEqual([0, 1]);
    });

    test('numbers with zero', () => {
        expect(twoSum([0, 4, 3, 0], 0)).toEqual([0, 3]);
    });
});
