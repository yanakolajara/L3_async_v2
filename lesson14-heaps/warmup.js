// Warm-up Exercises: Heap Operations

class MinHeap {
    constructor() {
        this.heap = [];
    }
    
    // Helper methods for getting parent and child indices
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }
    
    getRightChildIndex(i) {
        return 2 * i + 2;
    }
}

// 1. Implement insert method for MinHeap
function insert(heap, value) {
    // Your code here
}

// 2. Implement extractMin method for MinHeap
function extractMin(heap) {
    // Your code here
}

// 3. Create a function to check if an array represents a valid min heap
function isValidMinHeap(arr) {
    // Your code here
}

// Sample usage:
const heap = new MinHeap();
console.log(insert(heap, 3));   // Should maintain heap property
console.log(insert(heap, 1));   // Should maintain heap property
console.log(extractMin(heap));  // Should return 1

const arr = [1, 3, 5, 4, 6, 13, 10, 9, 8, 15, 17];
console.log(isValidMinHeap(arr));  // Should output: true
