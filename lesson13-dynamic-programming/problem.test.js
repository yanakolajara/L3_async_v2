const longestCommonSubsequence = require('./problem');

describe('longestCommonSubsequence', () => {
    // Simple cases
    test('empty strings should return 0', () => {
        expect(longestCommonSubsequence('', '')).toBe(0);
    });

    test('one empty string should return 0', () => {
        expect(longestCommonSubsequence('abc', '')).toBe(0);
        expect(longestCommonSubsequence('', 'xyz')).toBe(0);
    });

    // Normal cases
    test('strings with common subsequence', () => {
        expect(longestCommonSubsequence('abcde', 'ace')).toBe(3);
    });

    test('strings with no common subsequence', () => {
        expect(longestCommonSubsequence('abc', 'def')).toBe(0);
    });

    // Complex cases
    test('strings with multiple possible subsequences', () => {
        expect(longestCommonSubsequence('abc', 'abc')).toBe(3);
        expect(longestCommonSubsequence('abc', 'acb')).toBe(2);
    });

    test('longer strings', () => {
        expect(longestCommonSubsequence(
            'abcdefghijklmnop',
            'zyxwvutsrqponmlk'
        )).toBe(1);
    });

    // Edge cases
    test('single character strings', () => {
        expect(longestCommonSubsequence('a', 'a')).toBe(1);
        expect(longestCommonSubsequence('a', 'b')).toBe(0);
    });

    test('repeated characters', () => {
        expect(longestCommonSubsequence('aaaa', 'aa')).toBe(2);
    });
});
