/**
 * Problem: Given a string, write a function to determine if it is a palindrome.
 * A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward.
 * Ignore spaces, punctuation, and capitalization.
 *
 * Example:
 * isPalindrome("A man, a plan, a canal: Panama") => true
 * isPalindrome("race a car") => false
 *
 * @param {string} str - The input string.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 */
function isPalindrome(str) {
  if (str.length === 0) return true;
  let newStr = str
    .split(' ')
    .map((char) => {
      if (/[a-z]/.test(char)) return char.toLowerCase();
    })
    .join('');
  const lastIndex = newStr.length - 1;
  for (let i = 0; i < lastIndex; i++) {
    if (newStr[i] !== newStr[lastIndex - i]) return false;
  }
  // your code here
  return true;
}

module.exports = isPalindrome;
