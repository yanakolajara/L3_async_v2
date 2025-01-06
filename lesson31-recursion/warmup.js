// 1. Write a function called `generateAllCombinations(array)` using backtracking:
//    - It should return an array of all possible combinations of the elements in `array`.
//    - For example, generateAllCombinations([1, 2]) might produce:
//        [], [1], [2], [1,2]
//
//    Hint: At each step, you either include the current element or exclude it,
//    then recurse on the rest.

// 2. Implement a recursive function called `isPalindromeRecursively(str)`
//    that determines if `str` is a palindrome.
//    - A palindrome reads the same forward and backward.
//    - Base case: a string of length 0 or 1 is a palindrome.
//    - Recursive case: check if the first and last characters match,
//      then recurse on the substring excluding both.
//
//    Examples:
//      isPalindromeRecursively("racecar") => true
//      isPalindromeRecursively("hello") => false

// 3. Backtracking Challenge (Optional):
//    Write a function called `listAllPermutations(string)` to generate all
//    permutations of the characters in `string`.
//    - Use backtracking: pick a character, then recursively permute the remainder.
//
//    Example:
//      listAllPermutations("abc") => ["abc", "acb", "bac", "bca", "cab", "cba"]
//
// Console.log your solutions to verify correctness.
