/*
Code Analysis

Objective:
The objective of the findPairs function is to receive an array of numbers and a target sum, and return an array of pairs of numbers that add up to the target sum, without repeating pairs that have the same numbers in a different order.

Inputs:
- nums: an array of numbers
- targetSum: a number representing the target sum

Flow:
- Initialize an empty array called pairs
- Loop through the nums array with a for loop, starting at index 0
- Within the first loop, loop through the nums array again with a nested for loop, starting at the index after the current index of the outer loop
- Check if the sum of the two numbers at the current indices equals the targetSum
- If it does, create a pair array with the two numbers and check if it already exists in the pairs array
- If it doesn't, add the pair to the pairs array
- Return the pairs array

Outputs:
- pairs: an array of pairs of numbers that add up to the target sum, without repeating pairs that have the same numbers in a different order

Additional aspects:
- The function filters out repeating pairs that have the same numbers in a different order to avoid duplicates in the output
- The function assumes that the input array does not contain any duplicates
*/

const { findPairs } = require("../app");

describe("findPairsFunction", () => {
  it("inputContainsValidNumbers ", () => {
    const nums = [12, 12, -4, 3, 5];
    const targetSum = 8;
    const expectedPairs = [
      [12, -4],
      [3, 5],
    ];
    expect(findPairs(nums, targetSum)).toEqual(expectedPairs);
  });

  it("inputIsEmptyString", () => {
    const nums = "";
    const targetSum = 8;
    const expectedPairs = [];
    expect(findPairs(nums, targetSum)).toEqual(expectedPairs);
  });

  it("inputContainsOnlyOneNumber", () => {
    const nums = "5";
    const targetSum = 8;
    const expectedPairs = [];
    expect(findPairs(nums, targetSum)).toEqual(expectedPairs);
  });

  it("behaviorInputContainsDuplicates", () => {
    const nums = [12, 12, -4, 3, 5];
    const targetSum = 24;
    const expectedPairs = [[12, 12]];
    expect(findPairs(nums, targetSum)).toEqual(expectedPairs);
  });
});
