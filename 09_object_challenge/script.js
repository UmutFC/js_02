// Step 1
const library = [
  {
    title: "Angels & Demons",
    author: "Dan Brown",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Digital Fortress",
    author: "Dan Brown",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

// Step 2
// My solution
// const [first, second, third] = library;
// first.status.read = true;
// second.status.read = true;
// third.status.read = true;

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// Step 3
// My solution
// const [first] = library;
// first.title = "Angels & Demons II";

const { title: firstBook } = library[0];

console.log(firstBook);

// Step 4
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);

console.log(library);
