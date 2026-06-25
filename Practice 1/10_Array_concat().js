/* Notes
- Array.concate()
- Main array change kore na
*/

let num1 = [1,2,3,4];
let num2 = [5,6,7,8,9];
let num3 = [10,11,12,13];

let result1 = num1.concat(num2);
console.log(result1); // 1,2,3,4,5,6,7,8,9
console.log(num1); // 1,2,3,4


let result2 = num1.concat(num2,num3);
console.log(result2); //1,2,3,4,5,6,7,8,9,10,11,12,13


