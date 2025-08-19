// this is variable 
// in js we have three type of variable
// var (the old one), let (the new one), const (the constant one)
// let get started

// variable is used to save data, you can assign a value to a variable and use it later
// var is a keyword that is used to declare a variable, it can be used to declare a variable that can be changed later
// let is a keyword that is used to declare a variable, it can be used to declare a variable that can be changed later
// the difference between var and let is that var has a function scope, while let has a block scope
// this means that a variable declared with var can be accessed outside of the block it was declared
// for example, if you declare a variable inside a function, you can access it outside of the function
// while a variable declared with let can only be accessed inside the block it was declared

// const is a keyword that is used to declare a constant variable, it cannot be changed later

var name = "jane"; //this is a string variable
let age = 17; // this is a number variable
const stillAlive = true; // this is a boolean variable, the constant variable cannot be changed

// data types in js
// string, number, boolean, null, undefined, object, array

// string is a sequence of characters, it can be enclosed in single or double quotes
let greeting = "Hello, " + name; // string concatenation
console.log(greeting); // Output: Hello, jane 

// number is a numeric value, it can be an integer or a float
//float is a number that has a decimal point, it can represent fractions or real numbers
let height = 5.5; // this is a float number
//integer is a whole number, it can be positive or negative, but it cannot have a decimal point
let weight = 60; // this is an integer number
// you can perform arithmetic operations on numbers. like addition, subtraction, multiplication, and division
let product = height * weight; // this is a multiplication operation
let difference = weight - age; // this is a subtraction operation
let quotient = weight / age; // this is a division operation
let sum = age + weight; // this is an addition operation

// boolean is a true or false value
let isStudent = false; // this is a boolean value
// boolean values are often used in conditional statements to control the flow of the program
// for example, you can use an if statement to check if a variable is true or false
if (isStudent) {
    console.log("You are a student.");
} else {
    console.log("You are not a student.");
}

// boolean values can also be used in logical operations, like AND, OR, and NOT
// logical operations is used to combine or negate boolean values
// you can use the comparison operators (==, !=, >, <, >=, <=) to compare values and return a boolean result
// AND operator (&&) returns true if both operands are true
// OR operator (||) returns true if at least one operand is true
// NOT operator (!) negates the boolean value, it returns true if the operand is false and false if the operand is true


let isAdult = age >= 18; // this is a boolean expression that checks if the age is greater than or equal to 18
// you can use the logical AND operator (&&) to check if two conditions are true
let canVote = isAdult && isStudent; // this is a logical AND operation
// you can use the logical OR operator (||) to check if at least one condition is
let canDrive = isAdult || isStudent; // this is a logical OR operation
// you can use the logical NOT operator (!) to negate a boolean value
let isNotStudent = !isStudent; // this is a logical NOT operation

// null is a special value that represents no value
let emptyValue = null; // this is a null value
//we use null when we want to explicitly indicate that a variable has no value
//for example, when you want to reset a variable to have no value
//or when you want to indicate that a variable is intentionally empty
// null is different from undefined, which is a variable that has been declared but not assigned a value
//analogically, null is like an empty box that you can put something in later

// undefined is a variable that has been declared but not assigned a value
let notAssigned; // this is an undefined value
// you can check the type of a variable using typeof operator
console.log(typeof notAssigned); // Output: undefined
//undefined is different from null, undifiended means that the variable has been declared but not assigned a value, while null means that the variable has been explicitly assigned no value
//analogically, undefined is like a box that has not been opened yet, while null is like an empty box that you can put something in later

// object is a collection of key-value pairs
let person = {
    name: "John",
    age: 30,
    isStudent: true
    }; // this is an object
// you can access the values in an object using the key
console.log(person.name); // Output: John
// you can also add new key-value pairs to an object
person.height = 5.9; // adding a new key-value pair
// so object is a way to group related data together, it can contain different data types, including strings, numbers, booleans, arrays, and even other objects

// array is a collection of values
let colors = ["red", "green", "blue"]; // this is an array
console.log(colors[0]); // Output: red
// arrays are used to store multiple values in a single variable
// you can access the values in an array using the index, which starts from 0
// for example, the first value in the array is at index 0, the second value is at index 1, and so on
// you can also add new values to an array using the push() method
colors.push("yellow"); // adding a new value to the array
// you can remove the last value from an array using the pop() method
colors.pop(); // removing the last value from the array
// you can access the values in an array using the index
// but we will learn more about arrays in the next lesson