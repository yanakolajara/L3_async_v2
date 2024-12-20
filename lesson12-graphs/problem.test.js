const findOrder = require('./problem');

describe('findOrder', () => {
    // Helper function to verify topological order
    function isValidOrder(order, prerequisites) {
        const seen = new Set();
        for (const course of order) {
            seen.add(course);
        }
        for (const [course, prereq] of prerequisites) {
            if (order.indexOf(course) < order.indexOf(prereq)) {
                return false;
            }
        }
        return true;
    }

    // Simple cases
    test('empty prerequisites should return any order', () => {
        const result = findOrder(2, []);
        expect(result.length).toBe(2);
        expect(new Set(result)).toEqual(new Set([0, 1]));
    });

    test('single prerequisite', () => {
        const result = findOrder(2, [[1, 0]]);
        expect(isValidOrder(result, [[1, 0]])).toBe(true);
    });

    // Normal cases
    test('multiple prerequisites', () => {
        const prereqs = [[1, 0], [2, 0], [3, 1], [3, 2]];
        const result = findOrder(4, prereqs);
        expect(isValidOrder(result, prereqs)).toBe(true);
    });

    test('linear chain', () => {
        const prereqs = [[1, 0], [2, 1], [3, 2]];
        const result = findOrder(4, prereqs);
        expect(isValidOrder(result, prereqs)).toBe(true);
    });

    // Complex cases
    test('multiple valid orders', () => {
        const prereqs = [[1, 0], [2, 0], [3, 1], [3, 2]];
        const result = findOrder(4, prereqs);
        expect(result.length).toBe(4);
        expect(isValidOrder(result, prereqs)).toBe(true);
    });

    // Edge cases
    test('no prerequisites for a course', () => {
        const prereqs = [[1, 0], [2, 0]];
        const result = findOrder(3, prereqs);
        expect(result.includes(3)).toBe(true);
        expect(isValidOrder(result, prereqs)).toBe(true);
    });

    test('detect cycle should return empty array', () => {
        const prereqs = [[1, 0], [0, 1]];
        expect(findOrder(2, prereqs)).toEqual([]);
    });
});
