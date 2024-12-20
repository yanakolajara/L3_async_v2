const groupAnagrams = require('./problem');

describe('groupAnagrams', () => {
    // Helper function to check if arrays contain same elements
    function arraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) return false;
        const set1 = new Set(arr1);
        const set2 = new Set(arr2);
        return [...set1].every(item => set2.has(item));
    }

    // Simple cases
    test('empty array should return empty array', () => {
        expect(groupAnagrams([])).toEqual([]);
    });

    test('array with single string', () => {
        expect(groupAnagrams(['eat'])).toEqual(['eat']);
    });

    // Normal cases
    test('array with multiple anagrams', () => {
        const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
        const result = groupAnagrams(input);
        const expected = ['eat', 'tea', 'ate', 'tan', 'nat', 'bat'];
        expect(arraysEqual(result, expected)).toBe(true);
    });

    // Complex cases
    test('array with duplicate strings', () => {
        const input = ['eat', 'tea', 'eat', 'ate'];
        const result = groupAnagrams(input);
        const expected = ['eat', 'tea', 'eat', 'ate'];
        expect(arraysEqual(result, expected)).toBe(true);
    });

    // Edge cases
    test('array with empty strings', () => {
        const input = ['', '', 'b'];
        const result = groupAnagrams(input);
        const expected = ['', '', 'b'];
        expect(arraysEqual(result, expected)).toBe(true);
    });
});
