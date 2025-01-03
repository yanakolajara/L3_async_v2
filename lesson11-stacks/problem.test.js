const Stack = require('./problem');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe('push()', () => {
    test('adds an item to the stack', () => {
      stack.push(10);
      expect(stack.items).toEqual([10]); // Directly verify the internal state
    });

    test('adds multiple items to the stack', () => {
      stack.push(10);
      stack.push(20);
      stack.push(30);
      expect(stack.items).toEqual([10, 20, 30]);
    });
  });

  describe('pop()', () => {
    test('removes and returns the top item from the stack', () => {
      stack.items = [10, 20];
      const popped = stack.pop();
      expect(popped).toBe(20);
      expect(stack.items).toEqual([10]);
    });

    test('returns null if the stack is empty', () => {
      stack.items = [];
      const popped = stack.pop();
      expect(popped).toBeNull();
    });
  });

  describe('peek()', () => {
    test('returns the top item without removing it', () => {
      stack.items = [10, 20, 30];
      const top = stack.peek();
      expect(top).toBe(30);
      expect(stack.items).toEqual([10, 20, 30]); // Ensure stack remains unchanged
    });

    test('returns null if the stack is empty', () => {
      stack.items = [];
      const top = stack.peek();
      expect(top).toBeNull();
    });
  });

  describe('isEmpty()', () => {
    test('returns true for an empty stack', () => {
      stack.items = [];
      expect(stack.isEmpty()).toBe(true);
    });

    test('returns false for a non-empty stack', () => {
      stack.items = [10];
      expect(stack.isEmpty()).toBe(false);
    });
  });
});
