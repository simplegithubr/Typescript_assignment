// q 24

//Tests for equality and inequality with strings:

let str1: string = "hello";
let str2: string = "world";

console.log(str1 === str2); // False
console.log(str1 !== str2); // True
//Tests using the lower case function:

let input: string = "Hello";
let lowerCaseInput: string = input.toLowerCase();

console.log(lowerCaseInput === "hello"); // True
console.log(lowerCaseInput !== "hello"); // False


//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:

let num1: number = 5;
let num2: number = 10;

console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 >= num2); // False
console.log(num1 <= num2); // True

//Tests using "and" and "or" operators:

let x: number = 5;
let y: number = 10;
let z: number = 15;

console.log((x < y) && (y < z)); // True
console.log((x < y) || (y > z)); // Tru

//Test whether an item is in an array:

let array: number[] = [1, 2, 3, 4, 5];

console.log(array.includes(3)); // True
console.log(array.includes(6)); // False

let array: number[] = [1, 2, 3, 4, 5];

console.log(!array.includes(6)); // True
console.log(!array.includes(3)); // False