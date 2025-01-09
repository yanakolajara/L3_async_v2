const isValid = require("./problem");

describe("isValid", () => {
  // Simple cases
  test("empty string should return true", () => {
    expect(isValid("")).toBe(true);
  });

  test("single pair of parentheses", () => {
    expect(isValid("()")).toBe(true);
  });

  test("mismatched pair of brackets", () => {
    expect(isValid("((")).toBe(false);
  });
});
