// before we started to learn about javascript, we'll learn about javascript itself first

// javascript is a programming language that can run in web browsers and on servers
// it is a high-level, interpreted language that is dynamically typed and garbage-collected
// it is also a multi-paradigm language, meaning it supports different programming styles such as
// procedural, object-oriented, and functional programming

// javascript was created in 1995 by Brendan Eich while he was working at Netscape Communications Corporation
// it was originally called Mocha, then renamed to LiveScript, and finally to JavaScript
// despite its name, JavaScript is not related to Java, which is a different programming language
// the name "JavaScript" was chosen for marketing reasons, to capitalize on the popularity of Java at the time
// javascript has since become one of the most popular programming languages in the world

// javascript is primarily used for web development, to create interactive and dynamic web pages
// it can be used to manipulate the Document Object Model (DOM) of a web page, handle events, and communicate with web servers
// it is also used for server-side development, using platforms such as Node.js
// javascript can also be used for mobile app development, game development, and desktop app development
// it has a large and active community, with many libraries and frameworks available to help developers build applications more easily

// javascript works together with HTML and CSS to build modern websites
// HTML gives the structure, CSS gives the styling, and JavaScript gives the interactivity

// javascript code is executed by engines inside browsers or on servers
// examples of engines are: V8 (used by Chrome and Node.js), SpiderMonkey (used by Firefox), and JavaScriptCore (used by Safari)

// javascript is standardized by ECMAScript (ES)
// the ES6 version (released in 2015) introduced major features like let, const, arrow functions, template literals, classes, and modules
// every year new features are added in ES7, ES8, and so on

// javascript is single-threaded, meaning it executes one task at a time
// it uses the event loop to handle asynchronous operations like timers, user input, and network requests without blocking the main thread

// javascript supports "strict mode" using "use strict"; at the beginning of a script or function
// strict mode makes your code safer, prevents some errors, and helps you write cleaner programs

// javascript is dynamically typed: variable types are decided at runtime
// it is also weakly typed: it allows implicit type conversion
// for example, "5" + 2 results in "52" (string concatenation), while "5" - 2 results in 3 (number subtraction)

// javascript has error handling using try...catch
// proper error handling is important for making reliable and safe applications

// javascript also supports modules, which allow you to split code into multiple files and import/export them
// before ES6 modules, developers used CommonJS or AMD, but today ES modules are the standard

// in this course, we will learn the basics of javascript, including variables, data types, operators, control structures, functions, and objects
// we will also learn about more advanced topics such as asynchronous programming, promises, and modules
// by the end of this course, you will have a solid understanding of javascript and be able to build your own web applications

// in javascript, we can write code in two main ways: using statements and expressions
// statements are instructions that perform an action, such as declaring a variable or calling a function
// expressions are pieces of code that evaluate to a value, such as a mathematical operation or a function call
// for example, the following code contains both a statement and an expression:
let x = 5 + 3; // this is a statement that declares a variable x and assigns it the value of the expression 5 + 3
// the expression 5 + 3 evaluates to the value 8, which is then assigned to the variable x
// so in this case, the statement is "let x = 5 + 3;" and the expression is "5 + 3"

// in javascript, we can also write code in two main styles: imperative and declarative
// imperative programming is a style that focuses on how to perform a task, using statements and control structures
// declarative programming is a style that focuses on what the desired outcome is, using expressions and higher-level abstractions
// for example, the following code uses an imperative style to calculate the sum of an array:
let numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
// this code uses a for loop to iterate over the array and add each number to the sum variable
// this is an imperative approach, as it specifies how to calculate the sum step by step
// on the other hand, the following code uses a declarative style to achieve the same result:
let total = numbers.reduce((acc, curr) => acc + curr, 0);
// this code uses the reduce method of the array to calculate the sum in a more concise and expressive way
// this is a declarative approach, as it specifies what the desired outcome is (the sum of the array) without detailing how to achieve it

// in this course, we will primarily use the imperative style of programming, as it is more straightforward and easier to understand for beginners
// however, we will also explore some declarative techniques and concepts as we progress through the course

// in programming, theres many of typing styles like camelCase, PascalCase, snake_case, kebab-case
// in this course, we will primarily use camelCase for variable and function names, as it is the most common convention in javascript
// camelCase is a style where the first word is lowercase and each subsequent word starts with an uppercase letter, with no spaces or underscores in between
// for example, we would write a variable name like this: myVariableName
// and a function name like this: myFunctionName()
// we will also use PascalCase for class names, where each word starts with an uppercase letter
// for example, we would write a class name like this: MyClassName
// we will avoid using snake_case and kebab-case, as they are less common in javascript

// now that we have a basic understanding of javascript and some programming concepts, we can start learning the language itself
// in the next lesson, we will learn about variables and data types in javascript
