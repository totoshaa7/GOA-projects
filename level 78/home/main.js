// main js
import { sum } from './app.js';

const result = sum(3, 5);
console.log(result); 

//


import { sum } from './app.js';

const result2 = sum(10, 20);
console.log(result2);   

//

import { multiply } from './app.js';

const result3 = multiply(4, 6);
console.log(result3);  

//

import { subtract, divide } from './app.js';

const resultSubtract = subtract(10, 5);
console.log(resultSubtract);  

const resultDivide = divide(20, 5);
console.log(resultDivide); 

const resultDivideByZero = divide(20, 0);
console.log(resultDivideByZero);  
