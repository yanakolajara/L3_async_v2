const spiralOrder = require('./problem');

describe('spiralOrder', () => {
    // Simple cases
    test('empty matrix should return empty array', () => {
        expect(spiralOrder([])).toEqual([]);
    });

    test('1x1 matrix should return single element', () => {
        expect(spiralOrder([[1]])).toEqual([1]);
    });

    // Normal cases
    test('3x3 matrix should return elements in spiral order', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];
        expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
    });

    test('4x4 matrix should return elements in spiral order', () => {
        const matrix = [
            [1,  2,  3,  4],
            [5,  6,  7,  8],
            [9,  10, 11, 12],
            [13, 14, 15, 16]
        ];
        expect(spiralOrder(matrix)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
    });

    // Edge cases
    test('1xn matrix should return elements left to right', () => {
        expect(spiralOrder([[1, 2, 3]])).toEqual([1, 2, 3]);
    });

    test('mx1 matrix should return elements top to bottom', () => {
        expect(spiralOrder([[1], [2], [3]])).toEqual([1, 2, 3]);
    });

    test('2x3 non-square matrix should return correct spiral order', () => {
        const matrix = [
            [1, 2, 3],
            [4, 5, 6]
        ];
        expect(spiralOrder(matrix)).toEqual([1, 2, 3, 6, 5, 4]);
    });
});
