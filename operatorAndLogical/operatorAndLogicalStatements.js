// welcme to the operator and logical statements section
// in this section, we will learn about arithmetic operations, boolean expressions, and logical operators

// aritmethic operations
// aritmetic operations are used to perform mathematical calculations
// we can use the following operators: +, -, *, /, % (modulus), and ** (exponentiation)
// modulus operator (%) returns the remainder of a division operation. for example, 5 % 2 returns 1 because 5 divided by 2 is 2 with a remainder of 1.
// exponentiation operator (**) raises a number to the power of another number. for example, 2 ** 3 returns 8 because 2 raised to the power of 3 is 8.
// we can also use the following functions: Math.max(), Math.min(), Math.round(), Math.ceil(), Math.floor(,  Math.abs(), Math.sqrt(), Math.pow(), Math.random()
// these functions are used to perform various mathematical operations like finding the maximum or minimum value, rounding a number, finding the absolute value, finding the square root, raising a number to a power, and generating a random number.

// let take an example to practice arithmetic operations

let channels = 10;
let videos = 100;

let totalVideos = channels * videos; // multiplication
let videosPerChannel = totalVideos / channels; // division
let remainingVideos = totalVideos % channels; // modulus

//now we we will use the Math functions
let maxVideos = Math.max(totalVideos, videos); // the result is the maximum of totalVideos and videos
let minVideos = Math.min(totalVideos, videos); // the result is the minimum of totalVideos and videos
let roundedVideos = Math.round(videosPerChannel); // rounds the videosPerChannel to the nearest integer, for example, 2.5 becomes 3 and 2.4 becomes 2
let ceilVideos = Math.ceil(videosPerChannel); // rounds up the videosPerChannel to the nearest integer, for example, 2.3 becomes 3
let floorVideos = Math.floor(videosPerChannel); // rounds down the videosPerChannel to the nearest integer, for example, 2.7 becomes 2
let absoluteVideos = Math.abs(remainingVideos); // returns the absolute value of remainingVideos, for example, -5 becomes 5
let sqrtVideos = Math.sqrt(totalVideos); // calculates the square root of totalVideos
let powVideos = Math.pow(videos, 2); // raises videos to the power of 2
let randomVideos = Math.random() * totalVideos; // generates a random number between 0

//boolean expressions
// boolean expressions are used to evaluate conditions and return true or false
// we can use the following operators: ==, ===, !=, !==, >, <, >=, <=
// these operators are used to compare values and return true or false based on the comparison
let isEqual = (channels == videos); // checks if channels is equal to videos
let isStrictEqual = (channels === videos); // checks if channels is strictly equal to videos
// for strict equality, both value and type must match, for example, 5 == '5' is true but 5 === '5' is false
let isNotEqual = (channels != videos); // checks if channels is not equal to videos
let isStrictNotEqual = (channels !== videos); // checks if channels is strictly not equal to videos
let isGreaterThan = (channels > videos); // checks if channels is greater than videos
let isLessThan = (channels < videos); // checks if channels is less than videos
let isGreaterThanOrEqual = (channels >= videos); // checks if channels is greater than or equal to videos
let isLessThanOrEqual = (channels <= videos); // checks if channels is less than or equal to videos
// we can also use the following functions: Boolean(), isNaN(), isFinite()
// Boolean() converts a value to a boolean, for example, Boolean(0) returns false
let isNaNValue = isNaN(channels); // checks if channels is NaN (Not a Number)
let isFiniteValue = isFinite(channels); // checks if channels is a finite number
// isFinite() returns true if the value is a finite number, for example, isFinite(1/0) returns false

// logical operators
// logical operators are used to combine boolean expressions and return true or false
// we can use the following operators: && (AND), || (OR), ! (NOT)
// AND operator (&&) returns true if both expressions are true
let isChannelAndVideo = (channels > 5 && videos < 200); // checks if channels is greater than 5 and videos is less than 200
// OR operator (||) returns true if at least one expression is true
let isChannelOrVideo = (channels < 5 || videos > 200); // checks if channels is less than 5 or videos is greater than 200
// NOT operator (!) negates the boolean value, for example, !true returns false
let isNotChannel = !isChannelAndVideo; // negates the value of isChannelAndVideo
// we can also use the following functions: Boolean(), isNaN(), isFinite()
let isBooleanValue = Boolean(isChannelAndVideo); // converts isChannelAndVideo to a boolean value

