const solveMaze = require('./problem');

describe('solveMaze', () => {
  test('returns an empty array for an empty maze', () => {
    expect(solveMaze([])).toEqual([]);
  });

  test('solves a 1x1 maze that is open', () => {
    const maze = [[0]];
    expect(solveMaze(maze)).toEqual([[0, 0]]);
  });

  test('returns empty array if a 1x1 maze is blocked', () => {
    const maze = [[1]];
    expect(solveMaze(maze)).toEqual([]);
  });

  test('finds a path in a small 2x2 maze', () => {
    const maze = [
      [0, 0],
      [1, 0],
    ];
    // (0,0) -> (0,1) -> (1,1) is a valid path
    const result = solveMaze(maze);
    expect(result).toContainEqual([0, 0]);
    expect(result).toContainEqual([0, 1]);
    expect(result).toContainEqual([1, 1]);
    expect(result.length).toBeGreaterThan(0);
  });

  test('returns empty array if no valid path in a 2x2 maze', () => {
    const maze = [
      [0, 1],
      [1, 1],
    ];
    // No open path
    expect(solveMaze(maze)).toEqual([]);
  });

  test('solves a 3x3 maze with one possible path', () => {
    const maze = [
      [0, 0, 1],
      [1, 0, 1],
      [1, 0, 0],
    ];
    // A valid path could be: (0,0) -> (0,1) -> (1,1) -> (2,1) -> (2,2)
    const result = solveMaze(maze);
    expect(result).toContainEqual([0, 0]);
    expect(result).toContainEqual([0, 1]);
    expect(result).toContainEqual([1, 1]);
    expect(result).toContainEqual([2, 1]);
    expect(result).toContainEqual([2, 2]);
  });
});
