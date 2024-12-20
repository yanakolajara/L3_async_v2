/**
 * Given a string s, find the length of the longest substring
 * without repeating characters.
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    // Edge case: empty string
    if (!s) return 0;

    let maxLength = 0;
    let start = 0;
    const charMap = new Map();

    // Sliding window approach
    for (let end = 0; end < s.length; end++) {
        const currentChar = s[end];

        // If we've seen this character before and it's in our current window
        if (charMap.has(currentChar) && charMap.get(currentChar) >= start) {
            // Move start pointer to position after the last occurrence
            start = charMap.get(currentChar) + 1;
        }

        // Update the last position of current character
        charMap.set(currentChar, end);

        // Update max length if current window is larger
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

module.exports = lengthOfLongestSubstring;