function isPalindrome(word) {
  // Write your algorithm here
  let vocabulary = word.split("").reverse().join("").toLowerCase();

  if ( vocabulary === word )return true;
  
 return false;
};


isPalindrome('a', 'abba', 'racecar', 'robot', 'ab');
console.log('isPalindrome')
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
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
