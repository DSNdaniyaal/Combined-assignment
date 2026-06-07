/*
  Write a function `nonrepeat` which takes a string as input and returns the first non-repeating character in the string.

  What is a non-repeating character?
  - A character that appears only once in the entire string.

  Example:
  - Input: "abcab"
  - Output: "c"

  - Input: "aabbcc"
  - Output: null

  - Input: "abcdef"
  - Output: "a"

  - Input: ""
  - Output: null

  Once you've implemented the logic, test your code by running
  - `npm run test-nonrepeat`
*/
function nonrepeat(str) {
  // Your code here
  let map={}
  for(let i=0;i<str.length;i++){
      if(!map[str[i]]){
        map[str[i]] = 1;
      } else {
        map[str[i]]++;
      }
  }

  let filtered =  Object.keys(map).filter(key => map[key] === 1)

  if(filtered.length === 0) return null
  return filtered[0]
}
module.exports = nonrepeat;
