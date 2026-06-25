/* Notes
- Array.splice()
- Main array change kore fele 
- remove/add/replace sob ek method e 
- return deleted items
- array.splice(start, deleteCount, item1, item2, ...)

*/

let array = [1,2,3,4,5,6,7];
let result1 = array.splice(0,2,'a','b');
console.log(array);
console.log(result1);

let array2 = [1,2,3,4,5,6,7,8,9]
let result2 = array2.splice(-2,1);
console.log(array2);

// -1: hosse last index
// -2: last index er ager index



