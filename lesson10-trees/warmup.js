// Warm-up Exercises: Tree Operations

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 1. Create a function to perform in-order traversal
function inorderTraversal(root) {
    // Your code here
}

// 2. Create a function to find the height of a binary tree
function treeHeight(root) {
    // Your code here
}

// 3. Create a function to check if a binary tree is balanced
function isBalanced(root) {
    // Your code here
}

// Sample usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(inorderTraversal(root));  // Should output: [4, 2, 5, 1, 3]
console.log(treeHeight(root));        // Should output: 3
console.log(isBalanced(root));        // Should output: true
