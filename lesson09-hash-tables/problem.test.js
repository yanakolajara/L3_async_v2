const sumConsecutiveNumbers = require("/Users/paulgasbarra/Code/pursuit/dsa-coursework-l3-2025/lesson07-big-o-notation/problem");

describe("sumConsecutiveNumbers", () => {
  it("should return 0 when n is 0", () => {
    expect(sumConsecutiveNumbers(0)).toBe(0);
  });

  it("should return 1 when n is 1", () => {
    expect(sumConsecutiveNumbers(1)).toBe(1);
  });

  it("should return 3 when n is 2", () => {
    expect(sumConsecutiveNumbers(2)).toBe(3);
  });

  it("should return 6 when n is 3", () => {
    expect(sumConsecutiveNumbers(3)).toBe(6);
  });

  it("should return 15 when n is 5", () => {
    expect(sumConsecutiveNumbers(5)).toBe(15);
  });

  it("should return 55 when n is 10", () => {
    expect(sumConsecutiveNumbers(10)).toBe(55);
  });

  // Add more test cases here...
});
