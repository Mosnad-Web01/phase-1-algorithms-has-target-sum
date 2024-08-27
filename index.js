function hasTargetSum(array, target) {
  // Create a new Set to store the complement of each element in the array
  const complement = new Set();

  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    // If the current element is in the complement Set, it means we've found a pair that sums to the target
    if (complement.has(array[i])) {
      return true;
    }

    // Otherwise, add the complement of the current element to the Set
    complement.add(target - array[i]);
  }

  // If we've gone through the entire array without finding a pair that sums to the target, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
