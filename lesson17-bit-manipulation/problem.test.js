const singleNumber = require('./problem');

describe('singleNumber', () => {
    // Simple cases
    test('array with single element should return that element', () => {
        expect(singleNumber([1])).toBe(1);
    });

    test('basic case with positive numbers', () => {
        expect(singleNumber([2,2,3,2])).toBe(3);
    });

    // Normal cases
    test('larger array with positive numbers', () => {
        expect(singleNumber([1,1,1,3,3,3,4])).toBe(4);
    });

    test('numbers in non-sequential order', () => {
        expect(singleNumber([5,3,5,1,5,3,3])).toBe(1);
    });

    // Complex cases
    test('array with negative numbers', () => {
        expect(singleNumber([-2,-2,1,-2])).toBe(1);
    });

    test('larger numbers', () => {
        expect(singleNumber([1000,1000,1000,5])).toBe(5);
    });

    // Edge cases
    test('zero as single number', () => {
        expect(singleNumber([1,1,1,0])).toBe(0);
    });

    test('array with interleaved numbers', () => {
        expect(singleNumber([1,2,1,2,1,3,2])).toBe(3);
    });
});
