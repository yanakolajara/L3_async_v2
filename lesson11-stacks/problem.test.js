const Stack = require('./problem');

describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test('push adds an item to the stack', () => {
    stack.push(10);
    expect(stack.peek()).toBe(10);
  });

  test('pop removes and returns the top item', () => {
    stack.push(20);
    expect(stack.pop()).toBe(20);
    expect(stack.isEmpty()).toBe(true);
  });

  test('peek returns the top item without removing it', () => {
    stack.push(30);
    expect(stack.peek()).toBe(30);
    expect(stack.isEmpty()).toBe(false);
  });

  test('isEmpty returns true for an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  test('isEmpty returns false for a non-empty stack', () => {
    stack.push(40);
    expect(stack.isEmpty()).toBe(false);
  });

  test('pop returns null if the stack is empty', () => {
    expect(stack.pop()).toBeNull();
  });

  test('peek returns null if the stack is empty', () => {
    expect(stack.peek()).toBeNull();
  });
});
