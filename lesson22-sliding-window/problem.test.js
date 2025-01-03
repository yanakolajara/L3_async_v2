const maxSubArraySum = require("./problem");

test("Returns correct length for [2,3,1,2,4,3] and sum 7", () => {
  expect(maxSubArraySum([2,3,1,2,4,3], 7)).toEqual(2);
});

test("Returns correct length for [3, 2, 4] and sum 9", () => {
  expect(maxSubArraySum([2,1,6,5,4], 9)).toEqual(2);
});

test("Returns correct length for [3, 3] and sum 52", () => {
  expect(maxSubArraySum([3,1,7,11,2,9,8,21,62,33,19], 52)).toEqual(1);
});

test("Returns correct length for [1, 2, 3, 4, 5] and sum 39", () => {
  expect(maxSubArraySum([1,4,16,22,5,7,8,9,10], 39)).toEqual(3);
});
