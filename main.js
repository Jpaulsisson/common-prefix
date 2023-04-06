// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

const starter = ["flgwer","flow","flight"]
const next = ["dog","racecar","car"]


//////// first attempt //////////
// function longestPrefix(array) {
//   array.reduce((acc, current) => {
//     let regex = new RegExp(acc);
//     console.log(regex);
//   }, '/\w+/')
// }

/////// second attempt /////////
function commonPrefix(array) {
  const newArray = array.sort((a, b) => a.length - b.length);
  ////I need to create a loop that checks each letter of each element against each letter of the next element until they don't match;
  let prefix = [];
  for (let i = 0; i < newArray.length - 1; i++) {
    for (let j = 0; j < newArray[0].length; j++) {
      if (newArray[i][j] === newArray[i+1][j]) {
        prefix.push(newArray[i][j])
        } else {
          
        }
      } 
    }
};

///// third attempt ///////
function reduceToThePrefix(array) {
  const newArray = array.sort((a, b) => a.length - b.length);
  const prefix = newArray.reduce((acc, currentValue) => {
    const accArray = Array.from(acc);
    const cVArray = [...currentValue];
    const prefixArray = [];                                 /////There are literally a million ways to
    let i = 0;                                              /////do this. Mine is not the best but I've been
      for (let letter of accArray) {                        /////wanting to practice my reduce skills. This was fun.
        if (letter === cVArray[i++]) {
          prefixArray.push(letter);
        } else {
          break;
        }
      }
    const accString = accArray.join('').toString();
    const prefixString = prefixArray.join('').toString();
    return prefixString;
  }, newArray[0]) || "";
  return prefix;
}

console.log(reduceToThePrefix(starter));
console.log(reduceToThePrefix(next));

