import { baseUrl, discountPercentage } from "./constant.js";
// import { sum, multiply as addition } from "./math.js";
import * as math from "./math.js";
import greetings from "./default.js";

console.log(baseUrl);
console.log(discountPercentage);

console.log(math.sum(10, 20));
console.log(math.multiply(10, 30));

console.log(greetings("James"));

//Named export
//we can more than one named export in a file
//to import, we must wrap the names in curly braces e.g import {sum, multiply} from './math'
//when importing, only use the exact function but you can rename the function name e.g import {sum as newSum} from './math'
//when importing, you can import everything using * e.g import * as math from './math'
//usage: not too complex function

//Default export
//we can only have one default export in a file
//to import, we must not wrap the names in curly bracket
//when importing, you can use any name
//usage: for complex functions
