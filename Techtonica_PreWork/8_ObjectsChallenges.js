// Week 3 - Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js or using Replit.com
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a function called keys, which accepts an object and returns an array of all of the keys in the object.
// IMPORTANT: Do not use the built in Object.keys() function!
//PSEUDOCODE: use for...in loop to access key values
// push values into new array

function keys(obj) {
    let newArr = []
    for (let objKeys in obj) {
        //console.log(objKeys)
        newArr.push(objKeys)
    } return newArr
}

//Examples:
//  let obj = { a: 1, b: 2, c: 3 };
//  console.log(keys(obj)); // ["a", "b", "c"]
//  let obj2 = { first: 'Matt', last: 'Lane' };
//  console.log(keys(obj2)); // ["first", "last"]
//  let obj3 = {};
//  console.log(keys(obj3)); // []

// Exercise 2. Write a function called values, which accepts an object and returns an array of all of the values in the object.
// IMPORTANT: Do not use the built in Object.values() function!
//PSEUDOCODE: follow the same steps from the first exercise but use bracket notation to access the objects values

function values(obj) {
    let newArr2 = [];
    for(let objValues in obj) {
        //console.log(obj[objValues])
        newArr2.push(obj[objValues])
    } return newArr2
}

// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// values(obj); // [1,2,3]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// values(obj2); // ["Matt", "Lane", true]
// let obj3 = {};
// values(obj3); // []

// Exercise 3. Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.
// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.
// IMPORTANT: Do not use the built in Object.entries() function!
//PSEUDOCODE: get object keys using for..in loop
//check for keys using hasOwnProperty
//push the key and key value into new array

function entries(obj) {
    let newArr3 = [];
    
    for (let keys in obj) {
        //console.log(keys) 
       if(obj.hasOwnProperty(keys)) {
           newArr3.push([keys, obj[keys]])
       }
    }
      return newArr3
}

// Examples:
// let obj = { a: 1, b: 2, c: 3 };
// entries(obj);
// [["a",1], ["b",2], ["c",3]]
// let obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
// entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]
// let obj3 = {};
// entries(obj3); // []

// Exercise 4. Write a function called pluck, which takes an array of objects and the name of a key.
// The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

function pluck(arr, keyName) {
    let newArr4 = [];
      for (let obj in arr) {
          let objKeys = arr[obj]
         //console.log(objKeys)    
          let values = objKeys[keyName]
          //console.log(values)
  
          newArr4.push(values)
      
      }
              return newArr4
  }

// Examples:
// pluck([{ name: "Tim" }, { name: "Matt" }, { name: "Elie" }],'name')
// ["Tim", "Matt", "Elie"]
// pluck([{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],'isBoatOwner')
// [true, false, undefined]

// Exercise 5. Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.
//PSEUDOCOD: use the same function to get the key value pairs in exercise 3
//push using string literals to get desired output
//join string using comma as a seperator

function stringFromObject(obj) {
    let newArr5 = [];

    for (let keys in obj) {
        //console.log(keys) 
       if(obj.hasOwnProperty(keys)) {
           newArr5.push(`${keys} = ${obj[keys]}`)
           
       }
    }
      return newArr5.join(', ')
}

// Examples:
// stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"
// stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"
// stringFromObject({}); // ""

// Exercise 6. Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
//PSEUDOCODE: access the key values from the object and turn them into an array using Object.values
//use Math.min/Math.max to get the highest and lowest values in the new array of keys
//use if statement to compare values and push values into empty array
//AMMENDMENT: Originally the logic was correct but the ouput was a string, using .map() on the keys variable to convert the string to an interger

function minMaxKeyInObject(obj) {
    let newArr6 = [];
    let keys = Object.keys(obj).map(Number);
    let highest = Math.max(...keys);
    let lowest = Math.min(...keys);
    for (let i = 0; i < keys.length; i++) {
        if( keys[i] >= highest || keys[i] <= lowest) {
            newArr6.push(keys[i])
            
        }
    } return newArr6
}

// Examples:
// minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]
// minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]