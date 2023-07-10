let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];

// fruits.push(berries);

// x = fruits[3][1];

const allFruits = [fruits, berries];

// x = allFruits[1][0];

// console.log(fruits);

// .concat() to connect arrays each other than create one new array
x = fruits.concat(berries);

// Spread Operator (...)
// you can use spread operator like concat, instead of making array of arrays, we want to make an array which contains elements of two different arrays, so you can use concat or spread operator
x = [...fruits, ...berries];

// Flatten Arrays
const arr = [1, 2, [3, 4], 5, [6, 7], 8, 9];

// removes nesting and turns nested elements into regular elements with regular order
x = arr.flat();

// Static Methods on Array Object

x = Array.isArray(x); // checks if something is array

x = Array.from("12345"); // turns string characters into an array

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c); // you can also use 'of' to turn declared variables into array elements

console.log(x);
