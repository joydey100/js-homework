const obj = {
  name: "karim",
  age: 25,
};

// console.log(Object.keys(obj));
// console.log(Object.values(obj));

let keys = Object.keys(obj);

for (let key of keys) {
  console.log(obj[key]);
}
