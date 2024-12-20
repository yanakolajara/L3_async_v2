// Warm-up Exercises: Stack and Queue Operations

// 1. Create a Stack class with push, pop, and peek operations
class Stack {
    constructor() {
        // Your code here
    }
    
    push(value) {
        // Your code here
    }
    
    pop() {
        // Your code here
    }
    
    peek() {
        // Your code here
    }
}

// 2. Create a Queue class with enqueue, dequeue, and peek operations
class Queue {
    constructor() {
        // Your code here
    }
    
    enqueue(value) {
        // Your code here
    }
    
    dequeue() {
        // Your code here
    }
    
    peek() {
        // Your code here
    }
}

// 3. Create a function that reverses a string using a stack
function reverseString(str) {
    // Your code here
}

// Sample usage:
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());  // Should output: 3
console.log(stack.peek()); // Should output: 2

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
console.log(queue.dequeue());  // Should output: 'a'
console.log(queue.peek());     // Should output: 'b'

console.log(reverseString("hello")); // Should output: "olleh"
