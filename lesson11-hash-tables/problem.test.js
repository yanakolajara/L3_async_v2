const MyHashMap = require('./problem');

describe('MyHashMap', () => {
    let hashMap;
    
    beforeEach(() => {
        hashMap = new MyHashMap();
    });
    
    // Simple cases
    test('putting and getting a single value', () => {
        hashMap.put(1, 1);
        expect(hashMap.get(1)).toBe(1);
    });
    
    test('getting non-existent key should return -1', () => {
        expect(hashMap.get(2)).toBe(-1);
    });
    
    // Normal cases
    test('updating existing key', () => {
        hashMap.put(1, 1);
        hashMap.put(1, 2);
        expect(hashMap.get(1)).toBe(2);
    });
    
    test('removing existing key', () => {
        hashMap.put(2, 1);
        hashMap.remove(2);
        expect(hashMap.get(2)).toBe(-1);
    });
    
    // Complex cases
    test('handling multiple operations', () => {
        hashMap.put(1, 1);
        hashMap.put(2, 2);
        expect(hashMap.get(1)).toBe(1);
        hashMap.remove(1);
        expect(hashMap.get(1)).toBe(-1);
    });
    
    test('handling collisions', () => {
        // These keys might produce the same hash
        hashMap.put(1, 1);
        hashMap.put(11, 11);
        expect(hashMap.get(1)).toBe(1);
        expect(hashMap.get(11)).toBe(11);
    });
    
    // Edge cases
    test('handling large numbers', () => {
        hashMap.put(1000000, 1000000);
        expect(hashMap.get(1000000)).toBe(1000000);
    });
    
    test('removing non-existent key should not affect other values', () => {
        hashMap.put(1, 1);
        hashMap.remove(2);
        expect(hashMap.get(1)).toBe(1);
    });
});
