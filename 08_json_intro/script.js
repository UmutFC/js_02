const post = {
  id: 1,
  title: "Post One",
  body: "This is the body",
};

// Convert to JSON string
const str = JSON.stringify(post);
console.log(str.id); // undefined

// Parse JSON - Convert from JSON string
const obj = JSON.parse(str);
console.log(obj.id); // will work

const posts = [
  {
    id: 1,
    title: "Post One",
    body: "This is the body",
  },
  {
    id: 2,
    title: "Post Two",
    body: "This is the body",
  },
];

const str2 = JSON.stringify(posts);

console.log(post);
console.log(str);
console.log(str2);
console.log(obj);
