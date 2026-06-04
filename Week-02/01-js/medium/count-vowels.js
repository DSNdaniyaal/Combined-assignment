/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    let cnt=0;

    for(const ch of str) {
      let vow = ch.toLowerCase()
      if(vow === 'a' || vow === 'e' || vow === 'i' || vow === 'o' || vow === 'u') cnt++
    }

    return cnt;
}

//console.log(countVowels("aeiouAEIOU"))

module.exports = countVowels;