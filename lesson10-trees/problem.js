/**
 * Given the root of a binary tree, return its level order traversal.
 * (i.e., from left to right, level by level)
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrder(root) {
    // Your code here
}

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

module.exports = { levelOrder, TreeNode };
