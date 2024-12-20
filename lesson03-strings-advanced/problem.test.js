const strStr = require('./problem');

describe('strStr', () => {
    // Simple cases
    test('empty needle should return 0', () => {
        expect(strStr("hello", "")).toBe(0);
    });

    test('empty haystack should return -1 for non-empty needle', () => {
        expect(strStr("", "a")).toBe(-1);
    });

    // Normal cases
    test('needle exists in haystack', () => {
        expect(strStr("hello", "ll")).toBe(2);
    });

    test('needle does not exist in haystack', () => {
        expect(strStr("aaaaa", "bba")).toBe(-1);
    });

    // Complex cases
    test('needle at the beginning of haystack', () => {
        expect(strStr("hello world", "hello")).toBe(0);
    });

    test('needle at the end of haystack', () => {
        expect(strStr("hello world", "world")).toBe(6);
    });

    // Edge cases
    test('needle longer than haystack', () => {
        expect(strStr("abc", "abcd")).toBe(-1);
    });

    test('repeated patterns in haystack', () => {
        expect(strStr("mississippi", "issi")).toBe(1);
    });
});
