/**
 * Checks if a string is a palindrome.
 * A palindrome reads the same backward as forward.
 * @param {string} str - The string to check
 * @return {boolean} - True if the string is a palindrome, false otherwise
 */
function isPalindrome(str) {
    // Convert to lowercase and remove non-alphanumeric characters
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
}

module.exports = isPalindrome;