//Tests for equality and inequality with strings:
var str1 = "hello";
var str2 = "world";
console.log(str1 === str2); // False
console.log(str1 !== str2); // True
//Tests using the lower case function:
var input = "Hello";
var lowerCaseInput = input.toLowerCase();
console.log(lowerCaseInput === "hello"); // True
console.log(lowerCaseInput !== "hello"); // False
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to:
var num1 = 5;
var num2 = 10;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 > num2); // False
console.log(num1 < num2); // True
console.log(num1 >= num2); // False
console.log(num1 <= num2); // True
//Tests using "and" and "or" operators:
var x = 5;
var y = 10;
var z = 15;
console.log((x < y) && (y < z)); // True
console.log((x < y) || (y > z)); // Tru
//Test whether an item is in an array:
var array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // True
console.log(array.includes(6)); // False
var array = [1, 2, 3, 4, 5];
console.log(!array.includes(6)); // True
console.log(!array.includes(3)); // False
