const rotate = require('./problem');

describe('rotate', () => {
    // Simple cases
    test('empty array should remain empty', () => {
        const nums = [];
        rotate(nums, 1);
        expect(nums).toEqual([]);
    });

    test('single element array should remain unchanged', () => {
        const nums = [1];
        rotate(nums, 1);
        expect(nums).toEqual([1]);
    });

    // Normal cases
    test('rotate array by 1 step', () => {
        const nums = [1, 2, 3, 4];
        rotate(nums, 1);
        expect(nums).toEqual([4, 1, 2, 3]);
    });

    test('rotate array by 2 steps', () => {
        const nums = [1, 2, 3, 4, 5];
        rotate(nums, 2);
        expect(nums).toEqual([4, 5, 1, 2, 3]);
    });

    // Complex cases
    test('rotate array when k > array length', () => {
        const nums = [1, 2, 3];
        rotate(nums, 5);  // Equivalent to rotating by 2
        expect(nums).toEqual([2, 3, 1]);
    });

    test('rotate larger array', () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        rotate(nums, 3);
        expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });

    // Edge cases
    test('rotate by 0 steps should not change array', () => {
        const nums = [1, 2, 3];
        rotate(nums, 0);
        expect(nums).toEqual([1, 2, 3]);
    });

    test('rotate by array length should return to original array', () => {
        const nums = [1, 2, 3, 4];
        rotate(nums, 4);
        expect(nums).toEqual([1, 2, 3, 4]);
    });
});
