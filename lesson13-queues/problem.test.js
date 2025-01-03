const Queue = require('./problem');

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  describe('enqueue()', () => {
    test('adds a single element to the queue', () => {
      queue.enqueue(10);
      expect(queue.items).toEqual([10]); // Directly inspect the internal items array
    });

    test('adds multiple elements to the queue', () => {
      queue.enqueue(10);
      queue.enqueue(20);
      queue.enqueue(30);
      expect(queue.items).toEqual([10, 20, 30]);
    });
  });

  describe('dequeue()', () => {
    test('removes and returns the front element of the queue', () => {
      queue.items = [10, 20, 30]; // Set up the queue state directly
      const dequeued = queue.dequeue();
      expect(dequeued).toBe(10);
      expect(queue.items).toEqual([20, 30]);
    });

    test('returns null when dequeueing an empty queue', () => {
      queue.items = []; // Set up an empty queue
      const dequeued = queue.dequeue();
      expect(dequeued).toBeNull();
      expect(queue.items).toEqual([]);
    });
  });

  describe('peek()', () => {
    test('returns the front element without removing it', () => {
      queue.items = [10, 20, 30]; // Set up the queue state directly
      const front = queue.peek();
      expect(front).toBe(10);
      expect(queue.items).toEqual([10, 20, 30]); // Ensure queue remains unchanged
    });

    test('returns null when peeking an empty queue', () => {
      queue.items = []; // Set up an empty queue
      const front = queue.peek();
      expect(front).toBeNull();
    });
  });

  describe('isEmpty()', () => {
    test('returns true for an empty queue', () => {
      queue.items = []; // Set up an empty queue
      expect(queue.isEmpty()).toBe(true);
    });

    test('returns false for a non-empty queue', () => {
      queue.items = [10]; // Set up a non-empty queue
      expect(queue.isEmpty()).toBe(false);
    });
  });

  describe('size()', () => {
    test('returns 0 for an empty queue', () => {
      queue.items = []; // Set up an empty queue
      expect(queue.size()).toBe(0);
    });

    test('returns the correct size for a non-empty queue', () => {
      queue.items = [10, 20, 30]; // Set up the queue state directly
      expect(queue.size()).toBe(3);
    });
  });
});
