const arr = [1, 2, 3, 4, 5];

arr.reverse();

arr.push(0);
arr.unshift(6);

console.log(arr);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

let solutionOne = arr1.slice(0, 4).concat(arr2);
console.log(solutionOne);

let solutionTwo = arr1
  .concat(arr2)
  .slice(0, 5)
  .concat(arr1.concat(arr2).slice(6, 11));

console.log(solutionTwo);

// let solutionThree = arr1.concat(arr2.splice(1));
// when you set variable and use splice to declare it, it will also splice it outside of the variable so actual array will change

// console.log(solutionThree);

let solutionFour = [...arr1, ...arr2];
solutionFour.splice(4, 1);

console.log(solutionFour);
