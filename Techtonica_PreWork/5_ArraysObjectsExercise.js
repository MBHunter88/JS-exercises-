// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Make an empty array named animals
;
var animals = [];
console.log("{Exercise 1:} ", animals);

// Exercise 2. Add the string "frog" to the array

animals.push("frog")
console.log("{Exercise 2:} " , animals)

// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.

animals.push("tiger", "parrot", "dolphin", "horse");
console.log("{Exercise 3:} " , animals)

// Exercise 4. Update the first item in the array to be "gorilla"

animals.unshift("gorilla");
console.log("{Exercise 4:} " , animals)

// Exercise 5. Print the number of items in the array (use the array property that will give you this information)

console.log("{Exercise 5:} ", animals.length)

// Exercise 6. Print the first item in the array

console.log("{Exercise 6:} " , animals[0])

// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)

console.log("{Exercise 7:} " , animals[animals.length - 1])

// Exercise 8. Remove the last item from the array

animals.pop("{Exercise 8:} " , animals.length - 1)

// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.

var assortedThings = ["hey", "hi", "hello", 1, 2, 3]
console.log("{Exercise 9:} " , assortedThings)
// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...
console.log("{Exercise 10:}")
function assort(arr) {
    for (let i = 0; i < arr.length; i++){
        let arrStr = arr[i];
    console.log("Item #" + i + " is" + " " + arrStr);
    }
}
assort(assortedThings);

// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.
console.log("{Exercise 11:} ")
function bigOrSmall(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 100) {
            console.log(arr[i] + " BIG")
        } else if (arr[i] < 100 && arr[i] > 1) {
            console.log(arr[i] + " small")
        } else if (arr[i] < 0){
            console.log(arr[i] + " negative")
        }
    }
}
bigOrSmall([110, -3, 28]);
bigOrSmall([13, 205, -9]);

// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.

var me = {
    name: "MJ",
    favoriteAnimal: "wolf",
    favoriteNumber: "25"
}
console.log("{Exercise 12:} ", me)

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)

 me.favortieDrink = "water";
 me.favoriteFood = "tacos";
 console.log("{Exercise 13:} ", me)

// Exercise 14. Update the favoriteAnimal value to something different

me.favoriteAnimal = "bear"
console.log("{Exercise 14:} ", me)

// Exercise 15. Print the value of favoriteAnimal.

console.log("{Exercise 15:} " , me.favoriteAnimal);
//console.log(me[favoriteAnimal]);
// Note: there are at least 2 ways to get the value of a key, try to write both.

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
/* I was able to recall a lot of the information I learned on freeCodeCamp.org about objects
so was able to complete these exercises rather quickly */

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.