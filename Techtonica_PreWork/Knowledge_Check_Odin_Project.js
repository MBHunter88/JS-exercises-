/**
1. Write an object constructor and instantiate the object.
2. Describe what a prototype is and how it can be used.
3. Explain prototypal inheritance.
4. Understand the basic do’s and don’t’s of prototypal inheritance.
5. How does this behave in different situations? */

function Minion(type, power) {
    this.type = type;
    this.power = power;
}
const minion = new Minion("Murloc", "poison");
console.log(minion)

//A protoype is a an object that an original object inherits from, meaning it has access to any methods, properties or functions.
//It can be used to create and update objects, and by assigning it to the prototype instead of every new object it saves memomry. 
//It also allows for Prototypal Inheritance

//Prototypal inheritance is when an object can access methods/properties from another object. There is a chain of prototypes
//that Javascript checks when looking up properties, starting with the current object and working back up to the prototypes ofeach object
//If no properties are found then null is returned. Object.getPrototypeOf() is commonly used when checking prototype properties 
//Ultimately it's like borrowing features from a base model (prototype) and then customizing them to fit specific needs.

//DO: Use Object.setPrototypeOf() to add or mutate propeties on objects
//DON"T: assign one prototype to another; use setPototypeOf() after the object is created, it has to be set before







