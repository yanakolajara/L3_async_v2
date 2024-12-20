const MyQueue = require('./problem');

describe('MyQueue', () => {
    let queue;
    
    beforeEach(() => {
        queue = new MyQueue();
    });
    
    // Simple cases
    test('queue should be empty when created', () => {
        expect(queue.empty()).toBe(true);
    });
    
    test('pushing element should make queue non-empty', () => {
        queue.push(1);
        expect(queue.empty()).toBe(false);
    });
    
    // Normal cases
    test('should maintain FIFO order', () => {
        queue.push(1);
        queue.push(2);
        queue.push(3);
        expect(queue.pop()).toBe(1);
        expect(queue.pop()).toBe(2);
        expect(queue.pop()).toBe(3);
    });
    
    test('peek should return front element without removing it', () => {
        queue.push(1);
        queue.push(2);
        expect(queue.peek()).toBe(1);
        expect(queue.peek()).toBe(1);
        expect(queue.pop()).toBe(1);
    });
    
    // Complex cases
    test('should handle mixed operations', () => {
        queue.push(1);
        queue.push(2);
        expect(queue.peek()).toBe(1);
        expect(queue.pop()).toBe(1);
        queue.push(3);
        expect(queue.pop()).toBe(2);
        expect(queue.pop()).toBe(3);
        expect(queue.empty()).toBe(true);
    });
    
    // Edge cases
    test('should handle pop on empty queue', () => {
        expect(() => queue.pop()).toThrow();
    });
    
    test('should handle peek on empty queue', () => {
        expect(() => queue.peek()).toThrow();
    });
});
