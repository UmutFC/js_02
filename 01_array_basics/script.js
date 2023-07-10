let x;

// Array Literal
const nums = [1, 3, 5, 7, 9];
// you can put different types of elements into an array
const mixed = [12, "Hello", true, null];

// Array Constructor
const fruits = new Array("apple", "grape", "orange");

x = nums[0];

x = nums[0] + nums[3];

x = `My favorite fruit is ${fruits[0]}`;

x = nums.length;

fruits[1] = "pear";

x = fruits;

// '.length' is not read only, you can use it to change length of array
// fruits.length = 2;

fruits[3] = "strawberry";

// length always will be 1 more than the last index number, so you can use length as the last index number of element that will join into array
fruits[fruits.length] = "blurberry";
fruits[fruits.length] = "peach";

console.log(x);
