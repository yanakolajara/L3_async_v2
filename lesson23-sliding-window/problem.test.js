const longestSubstringKDistinct = require("./problem");

test("Returns correct length for `eceba` and target 2", () => {
  expect(longestSubstringKDistinct("eceba", 2)).toEqual(3);
});

test("Returns correct length for `aa` and target 1", () => {
  expect(longestSubstringKDistinct("aa", 1)).toEqual(2);
});

test("Returns correct length for `abcdef` and target 3", () => {
  expect(longestSubstringKDistinct("abcdef", 3)).toEqual(3);
});

