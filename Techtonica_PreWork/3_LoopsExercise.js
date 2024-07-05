// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let n = 1;
console.log(`{Exercise 1: }`)
while(n <= 5) {
 console.log(n++)
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let x = 0;
let print = ""
console.log(`{Exercise 2: }`)
do {
  x = x + 1 
  print = print + x
} while (x < 5)
  console.log(print)

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
console.log(`{Exercise 3: }`)
for(let i = 1; i <= 5; i++){
  console.log(i)
}

// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.

console.log(`{Exercise 4: }`)
// while loop
console.log("WHILE LOOP...")
let y = 10;
while( y >= 1){
  console.log(y--)
}
// do...while loop
console.log("DO...WHILE LOOP...")
let z = 11;
printBack = "";
do {
  z = z - 1
  printBack = printBack + z;
} while (z > 1)
  console.log(printBack)
//for loop
console.log("FOR LOOP...")
for (let j = 10; j >= 1; j--){
  console.log(j)
}
// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
console.log(`{Exercise 5: }`)
//while loop
console.log("WHILE LOOP...")
let s = 7;
while( s <= 27) {
  console.log(s++)
}
//do...while loop
console.log("DO...WHILE LOOP...")
let r = 6;
let printThis = "";
do {
  r = r + 1
  printThis = printThis + r;
} while (r < 27)
console.log(printThis)
//for loop
console.log("FOR LOOP...")
for (let m = 7; m < 28; m++){
  console.log(m)
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.
console.log(`{Exercise 6: }`)
//while loop
console.log("WHILE LOOP...")
let h = 0;
while (h < 100) {
  console.log(h += 10)
}
//do...while loop
console.log("DO...WHILE LOOP...")
let f = 0;
let printThat = "";
do {
 f += 10
  printThat = printThat + f
} while ( f < 100)
  console.log(printThat)
//for loop
console.log("FOR LOOP...")
for(let b = 10; b <= 100; b += 10) {
  console.log(b)
}
// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

// let counterFour = 1;
// while (counterFour < 2) {
//   console.log("HELP ME!");
//   counterFour--;
// }
console.log(`{Exercise 7: } //It will count back through negative numbers iinfinitely. Since it starts at 1 it will always be true of being less than 2, to fix it we could either increment the counterFour variable`)
console.log(`{Exercise 7: }`)
let counterFour = 1;
while (counterFour < 2) {
  console.log("HELP ME!");
  counterFour++;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.
console.log(`{Exercise 8: }`)
let favInterger = 25;
for (let i = 0; i <= favInterger; i++) {
  console.log(i)
}

// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)
console.log(`{Exercise 9: }`)
let favInterger2 = 25;
for(let i = 0; i <= 100; i++) {
  if (i == favInterger2){
    console.log(i + " my favorite number!")
  } else {
    console.log(i + " not my favorite number")
  }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
console.log(`{Exercise 10: } So using a for loop as been my default so far, but after a little research I see the uses for while and do...while loops. For loops are great for iterating through arrays/strings and are useful when you don't have a set condition and while loops are better to use when your condition is predetermined.`) 

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
inside 1
*********************************** 
counting down from 2
inside 2
inside 1
*********************************** 
counting down from 3
inside 3
inside 2
inside 1
*********************************** 
*/
console.log(`{Exercise 11: }`)
for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++ ) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter > 0; insideCounter-- ) {
    console.log("inside " + insideCounter);
  }
  console.log("***********************************");
}


// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//The last problem was a bit challenging for me, it took more than a few tries to get the condition on the second loop correct.
//I kept running into the infinite loop problem, but soon realized that I need to use an actual interger to fix the problem.

// Email your file to us or commit your file to GitHub and email us a link.