/* Notes - Array.slice()
- slice() copies a portion of an array and returns a new array
- It does NOT change the original array
- array.slice(start, end)
- start → where to begin (included), end → where to stop (NOT included)
*/


let numbers = [1,2,3,4,5,6,7,8,9];

let result1 = numbers.slice(1,3);
console.log(result1); // 2,3

let result2 = numbers.slice(-5); // 5, 6, 7, 8, 9
console.log(result2);


