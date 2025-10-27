// console.log("Hello Sir");

// const number = [12, 3, 2, 5, 6];
// console.log(number.map((num) => num**2));

// global.console.log(number.map((num) => num**2));
// globalThis.console.log(number.map((num) => num**2));

// console.log(module);

// import add from "./math.js";

// CommonJs 

// Give same results because it takes last output means multipilcation but not addition

// const add = require("./math")
// const mul = require("./math")

const {add, mul, sub, div, PI} = require("./math");
const math = require("./math")

// We can also assign like above ---> const math = require("./math") 
// It helps us to remember subgroup or the topics 

console.log(math.add(3,4));
// give same result as clg(add(3, 4))
console.log(add(3, 4));
console.log(mul(3, 4));
console.log(sub(4, 2));
console.log(div(6, 2));
console.log(PI);





