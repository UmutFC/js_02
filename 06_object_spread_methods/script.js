let x;

// const todo = {};
const todo = new Object();

todo.id = 1;
todo.name = "Buy Milk";
todo.completed = true;

x = todo;

const person = {
  address: {
    coords: {
      lat: 42.2342,
      lng: -71.4132,
    },
  },
};
// nesting
x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// spread operator '...'
const obj3 = { ...obj1, ...obj2 };

// const obj4 = Object.assign({}, obj1, obj2);
const obj4 = Object.assign(obj1, obj2);

x = obj4;

// array of objects
const todos = [
  { id: 1, name: "Buy Milk" },
  { id: 2, name: "Pickup kids from school" },
  { id: 3, name: "Take out trash" },
];

x = todos[0].name;

// you can call properties of object
x = Object.keys(todo);

// you cant use length on objects
// x = todo.length;
x = Object.keys(todo).length;

// also you can call values of that properties
x = Object.values(todo);

// also you can call keys and values as an array with .entries()
x = Object.entries(todo);

x = todo.hasOwnProperty("name"); // you can check properties - true/false

console.log(x);
