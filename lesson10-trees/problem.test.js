const { levelOrder, TreeNode } = require('./problem');

describe('levelOrder', () => {
    // Simple cases
    test('empty tree should return empty array', () => {
        expect(levelOrder(null)).toEqual([]);
    });

    test('single node tree should return single level', () => {
        const root = new TreeNode(1);
        expect(levelOrder(root)).toEqual([[1]]);
    });

    // Normal cases
    test('complete binary tree should return correct level order', () => {
        const root = new TreeNode(3);
        root.left = new TreeNode(9);
        root.right = new TreeNode(20);
        root.right.left = new TreeNode(15);
        root.right.right = new TreeNode(7);
        expect(levelOrder(root)).toEqual([[3], [9, 20], [15, 7]]);
    });

    // Complex cases
    test('unbalanced tree should return correct level order', () => {
        const root = new TreeNode(1);
        root.left = new TreeNode(2);
        root.left.left = new TreeNode(3);
        root.left.left.left = new TreeNode(4);
        expect(levelOrder(root)).toEqual([[1], [2], [3], [4]]);
    });

    // Edge cases
    test('tree with single branch should return correct levels', () => {
        const root = new TreeNode(1);
        root.right = new TreeNode(2);
        root.right.right = new TreeNode(3);
        expect(levelOrder(root)).toEqual([[1], [2], [3]]);
    });
});
