const topKFrequent = require("./problem");

// Test case 1: nums = [1, 2, 2, 3, 3, 3], k = 2
console.log(topKFrequent([1, 2, 2, 3, 3, 3], 2)); // Expected output: [2, 3]

// Test case 2: nums = [7, 7], k = 1
console.log(topKFrequent([7, 7], 1)); // Expected output: [7]

// Test case 3: nums = [1, 1, 1, 2, 2, 3], k = 3
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 3)); // Expected output: [1, 2, 3]

// Test case 4: nums = [4, 4, 4, 4, 4], k = 1
console.log(topKFrequent([4, 4, 4, 4, 4], 1)); // Expected output: [4]

// Test case 5: nums = [1, 2, 3, 4, 5], k = 5
console.log(topKFrequent([1, 2, 3, 4, 5], 5)); // Expected output: [1, 2, 3, 4, 5]
