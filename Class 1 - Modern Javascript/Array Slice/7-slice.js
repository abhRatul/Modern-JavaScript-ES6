/*
- Returns a new array
- Does not modify the main array
- Supports negative indexes
- Slice with negative arguments creats a shallow copy
- array.slice(start, end)

Use cases
- Copy an array 
- Get the first n elements
- Get the last n elements
- Pagination
- Extract portion of data 
- Avoid mutating the original array
*/


const numbers = [23,21,45,71,29,47,73,39,25];
const result1 = numbers.slice(0,3);
console.log(result1);

const result2 = numbers.slice(-2);
const result3 = numbers.slice(-4,-1);
console.log(result2);
console.log(result3);



