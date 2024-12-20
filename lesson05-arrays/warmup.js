// Warm-up Exercises: Advanced Array Operations

// 1. Create a function that rotates a square matrix 90 degrees clockwise
function rotateMatrix(matrix) {
    // Your code here
}

// 2. Create a function that flattens a nested array (any depth) into a single array
function flattenDeep(arr) {
    // Your code here
}

// 3. Create a function that groups elements by a given size
function chunk(arr, size) {
    // Your code here
}

// Sample usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(rotateMatrix(matrix));  
// Should output: [[7,4,1], [8,5,2], [9,6,3]]

const nested = [1, [2, 3, [4, 5]], 6];
console.log(flattenDeep(nested));   
// Should output: [1, 2, 3, 4, 5, 6]

const numbers = [1, 2, 3, 4, 5];
console.log(chunk(numbers, 2));     
// Should output: [[1,2], [3,4], [5]]
