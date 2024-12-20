// Warm-up Exercises: Advanced Array Methods

// 1. Create a function that removes duplicates from an array
function removeDuplicates(arr) {
    // Your code here
}

// 2. Create a function that flattens a nested array one level deep
function flattenArray(arr) {
    // Your code here
}

// 3. Create a function that groups array elements by a given key
function groupBy(arr, key) {
    // Your code here
}

// Sample usage:
const numbers = [1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(numbers));  // Should output: [1, 2, 3, 4]

const nested = [1, [2, 3], [4, 5, [6]]];
console.log(flattenArray(nested));       // Should output: [1, 2, 3, 4, 5, [6]]

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 30 }
];
console.log(groupBy(people, 'age'));     // Should output: { 25: [{name: 'Alice'}, {name: 'Bob'}], 30: [{name: 'Charlie'}] }
