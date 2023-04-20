const readline = require("readline");

function findPairs(nums, targetSum) {
  const pairs = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === targetSum) {
        const pair = [nums[i], nums[j]];

        // Filtring repeating numbers
        if (
          !pairs.some(
            (existingPair) =>
              existingPair.includes(pair[0]) && existingPair.includes(pair[1])
          )
        ) {
          pairs.push(pair);
        }
      }
    }
  }
  return pairs;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Enter a list of numbers separated by commas: ",
  function (inputNums) {
    const nums = inputNums.split(",").map((num) => parseInt(num.trim(), 10));

    rl.question("Enter the target sum: ", function (inputTargetSum) {
      const targetSum = parseInt(inputTargetSum.trim(), 10);
      const pairs = findPairs(nums, targetSum);

      console.log(
        "The possible combinations what give you the tarjet sum are:"
      );

      pairs.forEach((pair) => {
        console.log(`+ ${pair[0]},${pair[1]}`);
      });

      rl.close();
    });
  }
);

module.exports = { findPairs };
