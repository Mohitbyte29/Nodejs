// import multiply from "./math.js"; // ---> import and export by export default
import {add, mul, div, sub, PI} from "./math.js"; // ---> export by named
import * as math from "./math.js"; // ---> export by aliased method

// console.log(multiply(4, 5));
// console.log(div(4, 5));
console.log(div(50, 25));
console.log(add(8, 9));
console.log(math.sub(34, 29));
console.log(math.PI);


