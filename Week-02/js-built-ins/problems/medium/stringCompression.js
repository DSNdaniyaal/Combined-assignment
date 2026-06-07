/*
  Write a function `compression` which takes a string as input and returns a compressed version of the string. The compression is done by replacing consecutive repeating characters with the character followed by the count of repetitions. If a character does not repeat, it is not followed by a count.

  Example:
  - Input: "aaabbbbcccvvmm"
  - Output: "a3b4c3v2m2"

  - Input: "abc"
  - Output: "abc"

  - Input: "aabbcc"
  - Output: "a2b2c2"

  - Input: ""
  - Output: ""

  Note:
  - The function should work for any alphanumeric string.

  Once you've implemented the logic, test your code by running
  - `npm run test-compressString`
*/
function compression(str) {
  // Your code here
  let n=str.length,cnt = 1,ans=""
  if(n===0) return ans;

  for(let i=1;i<n;i++){
    if(str[i]!==str[i-1]){
        ans = ans+str[i-1]+ ((cnt>1)? (cnt).toString(): '')
        cnt = 1;
    } else {
      cnt++;
    }
  }
    return ans+str[n-1]+ ((cnt>1)? (cnt).toString(): '')
}

module.exports = compression;