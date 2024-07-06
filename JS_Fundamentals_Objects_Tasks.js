console.log("{Task 1}"); 
/*Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object. */
var user = {};
console.log(user);
user.name = "John";
console.log(user);
user.surname = "Smith"
console.log(user);
user.name = "Pete";
console.log(user)
delete user.name; 
console.log(user)

console.log("{Task 2}");
/*Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.*/
let schedule = {};
function isEmpty(obj){
 for (let key in obj) {
    return false
    } 
        return true
}

console.log(isEmpty(schedule))

console.log("{Task 3}");
/*Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0. */
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0;
  for (let key in salaries) {
 sum += salaries[key]
  }
console.log(sum) // --> 390

console.log("{Task 4}")
/*Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.*/

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
for (let key in obj) {
    if(typeof obj[key] == 'number'){
    obj[key] *= 2;
    }  
  }return obj
}
//Delete return to abide by prompt


console.log(multiplyNumeric(menu)); // -->
// menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };