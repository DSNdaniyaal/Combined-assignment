/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let ans = Number.MIN_SAFE_INTEGER;

  numbers.forEach(num => {
    if(num > ans) 
      ans = num
  })

  return ans===Number.MIN_SAFE_INTEGER? undefined: ans;
}

module.exports = findLargestElement;