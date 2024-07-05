// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.
// Examples:
// prependToString('awesome', 'very') // --> 'veryawesome'
// prependToString('world', 'hello ') // --> 'hello world'
// prependToString('nothing', '') // --> 'nothing'
console.log("{Exercise 1:}")
function prependToString(str1, str2) {
    return str2 + str1
}
console.log(prependToString('awesome', 'very'))

// Exercise 2. Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.
// The function should return true if the first string includes the character, otherwise it should return false.
// IMPORTANT: Do not use the built in string.includes() function!
// Examples:
// stringIncludes('awesome', 'e'); // --> true
// stringIncludes('awesome', 'z'); // --> false
console.log("{Exercise 2:}")
function stringIncludes(str, char) {
    for (let i = 0; i <= str.length; i++) {
        if ( char == str[i])
            return true
    }
    return false
}

console.log(stringIncludes('awesome' , 'e'))
console.log(stringIncludes('awesome' , 'z'))
// Exercise 3. Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.
// The function should return the last index at which the character exists or -1 if the character is not found.
// IMPORTANT: Do not use the built in "string".lastIndexOf() function!
// Examples:
// stringLastIndexOf('awesome', 'e'); // --> 6
// stringLastIndexOf('awesome', 'z'); // --> -1
console.log("{Exercise 3:}")
function stringLastIndexOf(str, char) {
    for(let i = str.length - 1; i >= 0; i--) {
        if ( char == str[i]) {
            return i
        }
    } return -1
}
console.log(stringLastIndexOf('awesome', 'e'));
console.log(stringLastIndexOf('awesome', 'z'));

// Exercise 4. Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.
// The function should return a new string with the characters removed.
console.log("{Exercise 4:}")
function removeFromString(str, start, num) {
    let removed = "";
 for (let i = 0; i < str.length; i++) {
    if (i < start || i >= start + num) {
        removed += str[i]
     }
   } 
    return removed 
}

// Examples:
 console.log(removeFromString('Elie', 2, 2)) // --> 'El'
 console.log(removeFromString('Elie', 0, 1)) // --> 'lie'
 console.log(removeFromString('Hello School', 0, 6)) // --> 'School'
 console.log(removeFromString('Hello School', 2, 4)) // --> 'HeSchool'
 console.log(removeFromString('Hello School', 6, 400)) // --> 'Hello '

// Exercise 5. Write a function called indexOf, which accepts an array and a number.
// The function should return the first index at which the value exists or -1 if the value is not found.
// IMPORTANT: Do not use the built in array.indexOf() function!
console.log("{Exercise 5:}")
function indexOf (arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num == arr[i]) {
            return i
        }
    } return -1
}
// Examples:
let arr = [5, 10, 15, 20];
console.log(indexOf(arr, 20)); // --> 3
let arr2 = [1, 2, 3, 4, 5];
console.log(indexOf(arr2, 2)); // --> 1
let arr3 = [1, 2];
console.log(indexOf(arr3, 10)); // --> -1

// Exercise 6. Write a function called includes which accepts a collection, a value, and an optional starting index. The function should return true if the value exists in the collection when we search starting from the starting index. Otherwise, it should return false.
// The collection can be a string, an array, or an object. If the collection is a string or array, the third parameter is a starting index for where to search from. If the collection is an object, the function searches for the value among values in the object; since objects have no sort order, the third parameter is ignored.
//PSEUDOCODE: Determine what collection is using if statement, use for loops to iterate through collection and if statement to check if value is included.
//can use typeof to check for string and objects but can't be in same loop or conditional due to objects not having indices 
//should be able to inlude array and string in one codnfitional and loop as they iterate similarly 
//MORE PSEUDOCODE: Set condition for index 
//Check the if collection is an array or string and make sure the index is not greater than the length of the collection
//Loop through arr or str using for loop to check if the index parameter is equal to the value at the index of the collection
//create else if statement to check if the collection is an object
//use for in loop to check if the index parameter is equal to the key of the object
console.log("{Exercise 6:}")

function includes(collection, value, index) {
    // Checks if index is not provided or is less than 0; this will ensure the value parameter will be checked against the first element of the collection even if index is not provided
    if (index === undefined || index < 0) {
        index = 0
    }
    //Checks if the collection is an array or string 
  if ( Array.isArray(collection) || typeof collection === 'string') {
      //Makes sure the index is within the length of the collection; this ensures the value will be compared more than just the first element in the collection
       if (index >= collection.length) {
           return false
      }
      //Loops through the arr/str and checks if the value is in the collection
      for (let i = index; i < collection.length; i++) {
          if (collection[i] === value) {
              return true
              }
          }
      //Checks if the collection is an object
      }  else if (typeof collection === 'object') {
              // loops through the object and checks if the value is in the object
              for (let key in collection) {
                  if (collection[key] === value) {
                      return true;
                  }
              }
          }
          return false;
      }
// Examples:
console.log(includes([1, 2, 3], 1)) // --> true
console.log(includes([1, 2, 3], 1, 2)) // --> false
console.log(includes([1, 2, 3], 6)) // --> false
console.log(includes({ 'a': 1, 'b': 2 }, 1)) // --> true
console.log(includes({ 'a': 1, 'b': 2 }, 'a')) // --> false
console.log(includes('abcd', 'b')) // --> true
console.log(includes('abcd', 'e')) // --> false
console.log(includes('abcd', 'a', 2)) // --> false
//Extra Test Cases
console.log(includes('', 'a')) // --> false
console.log(includes([1, 2, 3], 1, -1)) // --> true
console.log(includes('abacad', 'a', 3)) // --> true
console.log(includes({ 'a': { 'b': 2 }, 'c': 3 }, 2)) // --> false
console.log(includes([undefined, 2, 3], undefined)) // --> true