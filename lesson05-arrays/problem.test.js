const checkLargestElement = require("./problem");

// Test case 1: Array with positive numbers
let nums = [1, 5, 3, 9, 2];
let expected = 9;
let result = checkLargestElement(nums);
console.log(result === expected); // Output: true

// Test case 2: Array with negative numbers
nums = [-7, -2, -5, -1];
expected = -1;
result = checkLargestElement(nums);
console.log(result === expected); // Output: true

// Test case 3: Array with both positive and negative numbers
nums = [-3, 7, -2, 0, 4];
expected = 7;
result = checkLargestElement(nums);
console.log(result === expected); // Output: true

// Test case 4: Array with duplicate largest elements
nums = [5, 2, 9, 5, 7, 9];
expected = 9;
result = checkLargestElement(nums);
console.log(result === expected); // Output: true

// Test case 5: Array with a single element
nums = [3];
expected = 3;
result = checkLargestElement(nums);
console.log(result === expected); // Output: true
