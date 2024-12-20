// Warm-up Exercises: Linked List Operations

// Node class for a singly linked list
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 1. Create a function to print all values in a linked list
function printList(head) {
    // Your code here
}

// 2. Create a function to insert a node at the beginning of a linked list
function insertAtBeginning(head, value) {
    // Your code here
}

// 3. Create a function to find the length of a linked list
function getLength(head) {
    // Your code here
}

// Sample usage:
const node3 = new ListNode(3);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log("Original list:");
printList(node1);  // Should output: 1 -> 2 -> 3

const newHead = insertAtBeginning(node1, 0);
console.log("After insertion:");
printList(newHead);  // Should output: 0 -> 1 -> 2 -> 3

console.log("Length:", getLength(newHead));  // Should output: 4
