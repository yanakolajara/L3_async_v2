const canProvideChange = require("./problem");

describe("canProvideChange", () => {
  test("Providing change for a single customer with a $5 bill", () => {
    expect(canProvideChange([5])).toBe(true);
  });

  test("Providing change for a single customer with a $10 bill", () => {
    expect(canProvideChange([10])).toBe(false);
  });

  test("Providing change for a single customer with a $20 bill", () => {
    expect(canProvideChange([20])).toBe(false);
  });

  test("Providing change for multiple customers with different bills", () => {
    expect(canProvideChange([5, 10, 5, 20])).toBe(true);
  });

  test("Providing change for multiple customers with insufficient change", () => {
    expect(canProvideChange([5, 10, 20])).toBe(false);
  });

  test("Providing change where the vendor should favor larger bills", () => {
    expect(canProvideChange([5, 5, 5, 5, 10, 20, 10, 10])).toBe(true);
  });
});
