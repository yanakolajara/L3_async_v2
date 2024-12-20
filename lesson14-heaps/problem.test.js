const KthLargest = require('./problem');

describe('KthLargest', () => {
    // Simple cases
    test('basic initialization and add', () => {
        const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
        expect(kthLargest.add(3)).toBe(4);
    });

    test('empty initial array', () => {
        const kthLargest = new KthLargest(1, []);
        expect(kthLargest.add(3)).toBe(3);
    });

    // Normal cases
    test('multiple add operations', () => {
        const kthLargest = new KthLargest(3, [4, 5, 8, 2]);
        expect(kthLargest.add(3)).toBe(4);
        expect(kthLargest.add(5)).toBe(5);
        expect(kthLargest.add(10)).toBe(5);
        expect(kthLargest.add(9)).toBe(8);
        expect(kthLargest.add(4)).toBe(8);
    });

    // Edge cases
    test('k equals 1', () => {
        const kthLargest = new KthLargest(1, []);
        expect(kthLargest.add(-3)).toBe(-3);
        expect(kthLargest.add(-2)).toBe(-2);
        expect(kthLargest.add(-4)).toBe(-2);
    });

    test('k equals array length', () => {
        const kthLargest = new KthLargest(3, [1, 2, 3]);
        expect(kthLargest.add(4)).toBe(2);
        expect(kthLargest.add(5)).toBe(3);
    });
});
