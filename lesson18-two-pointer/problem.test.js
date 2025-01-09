const isValidPalindrome = require("./problem");
describe("isValidPalindrome", () => {
  test("should return true for a valid palindrome", () => {
    expect(isValidPalindrome("Madam, in Eden, I'm Adam.")).toBe(true);
  });

  test("should return false for an invalid palindrome", () => {
    expect(isValidPalindrome("Hello, World!")).toBe(false);
  });
});
