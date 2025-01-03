const groupNames = require("./problem");

describe("groupNames", () => {
  it("should group names by their first letter", () => {
    const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
    const expected = {
      A: ["Alice"],
      B: ["Bob"],
      C: ["Charlie"],
      D: ["David"],
      E: ["Eve"],
    };
    expect(groupNames(names)).toEqual(expected);
  });

  it("should handle empty array", () => {
    const names = [];
    const expected = {};
    expect(groupNames(names)).toEqual(expected);
  });

  it("should handle names with different cases", () => {
    const names = ["Alice", "bob", "Charlie", "david", "Eve"];
    const expected = {
      A: ["Alice"],
      B: ["bob"],
      C: ["Charlie"],
      D: ["david"],
      E: ["Eve"],
    };
    expect(groupNames(names)).toEqual(expected);
  });

  it("should handle names with leading/trailing spaces", () => {
    const names = [" Alice", "Bob ", " Charlie ", " David", "Eve "];
    const expected = {
      A: [" Alice"],
      B: ["Bob "],
      C: [" Charlie "],
      D: [" David"],
      E: ["Eve "],
    };
    expect(groupNames(names)).toEqual(expected);
  });
});
