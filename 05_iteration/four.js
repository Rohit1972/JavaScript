const myObject = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
};

for (const key in myObject) {
  console.log(myObject[key]);
}
for (const key in myObject) {
  console.log(`${key} shortcut for ${myObject[key]}`);
}

const programming = ["js", "rb", "py"];

for (const key in programming) {
  console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United State of America ");

for (const key in map) {
  console.log(key); // map is not iteratable
}
