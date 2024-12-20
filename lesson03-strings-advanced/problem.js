/**
 * Implement strStr().
 * Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    // Edge case: empty needle should return 0
    if (needle === '') return 0;

    // Edge case: empty haystack with non-empty needle
    if (haystack === '' && needle !== '') return -1;

    // Main loop to find needle in haystack
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let found = true;
        // Check if substring starting at i matches needle
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                found = false;
                break;
            }
        }
        if (found) return i;
    }

    return -1;
}

module.exports = strStr;