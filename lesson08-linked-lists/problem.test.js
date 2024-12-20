const { reverseList, ListNode } = require('./problem');

describe('reverseList', () => {
    // Helper function to create linked list from array
    function createList(arr) {
        if (!arr.length) return null;
        const head = new ListNode(arr[0]);
        let current = head;
        for (let i = 1; i < arr.length; i++) {
            current.next = new ListNode(arr[i]);
            current = current.next;
        }
        return head;
    }

    // Helper function to convert linked list to array
    function listToArray(head) {
        const result = [];
        let current = head;
        while (current) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }

    // Simple cases
    test('empty list should return null', () => {
        expect(reverseList(null)).toBe(null);
    });

    test('single node should return same node', () => {
        const head = new ListNode(1);
        expect(listToArray(reverseList(head))).toEqual([1]);
    });

    // Normal cases
    test('list with multiple nodes should be reversed', () => {
        const head = createList([1, 2, 3, 4, 5]);
        expect(listToArray(reverseList(head))).toEqual([5, 4, 3, 2, 1]);
    });

    test('list with two nodes should be reversed', () => {
        const head = createList([1, 2]);
        expect(listToArray(reverseList(head))).toEqual([2, 1]);
    });
});
