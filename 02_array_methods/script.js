let x;

const arr = [1, 2, 3, 4];

// .push() method adds element to the last index position
arr.push(100);

// .pop() method if it doesnt get any parameter, it will pop off the last element
arr.pop();

// .unshift() to add element to first index which is 0
arr.unshift(99);

// .shift() to remove first element
arr.shift();

// .reverse() to reverse an array
arr.reverse();

// console.log(arr);

// checks if array has any specific element or not
x = arr.includes(20); // true/false

// since array is reverse index of '4' will be 0, if you ask index of an element which does not exist in array, result will be '-1'
x = arr.indexOf(4);

// .slice(x), if you just pass x it will return only the x'th element and after
x = arr.slice(1);
// .slice(x,y), if you pass x and y it will return elements from x'th 'till the y'th one which y'th one is not included
x = arr.slice(1, 4);

// .splice() works same as '.slice()' but plucks out the chosen ones from array
// x = arr.splice(1, 4);

// you can remove specific element
// x = arr.splice(3,1);
// x = arr.splice(3);

// you can combo different methods
x = arr.splice(1, 4).reverse().toString().charAt();

console.log(x);
