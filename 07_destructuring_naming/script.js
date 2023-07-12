const firstName = "John";
const lastName = "Doe";
const age = 30;

const person = {
  // you dont need to do it this way
  //   firstName: firstName,
  //   lastName: lastName,
  //   age: age,
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring
const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "John",
  },
};

const {
  id: todoID,
  title,
  user: { name },
} = todo; // this is for pulling variable out from object

// console.log(id, title);
// console.log(user);
console.log(name);
console.log(todoID);

// Destructure Arrays
const nums = [23, 67, 33, 49, 52];

// rest operator is same as spread operator but there is different usage
const [first, second, ...rest] = nums;

console.log(first, second, rest); // it will give first to elements
