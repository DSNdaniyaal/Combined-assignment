/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(s) {
    const str = s.replace(/[^a-z0-9]/gi, '');
    let n = str.length


    for(let i=0;i < n/2 ; i++){
      let ch1 = str[i].toLowerCase(), ch2 = str[n-1-i].toLowerCase()

      if(ch1 !== ch2) return false
    }

    return true;
}

console.log(isPalindrome("aaaasaaaa"))

module.exports = isPalindrome;