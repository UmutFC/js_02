const person = {
  name: "Jane Doe",
  age: 27,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

x = person.name;
// or
x = person["name"];

// you can approach to objects inside of object
x = person.address.state;
// and also array elements too
x = person.hobbies[0];

// you can change values inside of object
// person.name = "John Doe";
// person["isAdmin"] = false;

// you can delete an object property
delete person.age;

// also you can add properties
person.hasChildren = true;

// you can also create function inside of object
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};
// and call it too
person.greet();

const person2 = {
  "first name": "Furkan",
  "last name": "Çomalak",
  // you can type in this form but it is not recommended
};

// x = person2.first name;
// you have to use brackets for this form
x = person2["first name"];

x = person;
console.log(x);
