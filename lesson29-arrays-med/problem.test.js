const groupAnagrams = require("./problem");

describe("groupAnagrams", () => {
  it("should group anagrams together", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expectedOutput = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
    expect(groupAnagrams(input)).toEqual(expectedOutput);
  });

  it("should handle empty input", () => {
    const input = [];
    const expectedOutput = [];
    expect(groupAnagrams(input)).toEqual(expectedOutput);
  });

  it("should handle single word input", () => {
    const input = ["hello"];
    const expectedOutput = [["hello"]];
    expect(groupAnagrams(input)).toEqual(expectedOutput);
  });

  it("should handle input with no anagrams", () => {
    const input = ["abc", "def", "xyz"];
    const expectedOutput = [["abc"], ["def"], ["xyz"]];
    expect(groupAnagrams(input)).toEqual(expectedOutput);
  });
});
