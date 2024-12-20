const twoSum = require("./problem");

test("Returns correct indices for [2, 7, 11, 15] and target 9", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("Returns correct indices for [3, 2, 4] and target 6", () => {
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
});

test("Returns correct indices for [3, 3] and target 6", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test("Returns correct indices for [1, 2, 3, 4, 5] and target 9", () => {
  expect(twoSum([1, 2, 3, 4, 5], 9)).toEqual([3, 4]);
});

test("Returns correct indices for [10, 20, 30, 40, 50] and target 70", () => {
  expect(twoSum([10, 20, 30, 40, 50], 70)).toEqual([2, 4]);
});
