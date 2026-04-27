/*
Notes
- Array.prototype.filter()
- main array change kore na 
- array filter kore value return kore
*/

let numbers = [1,2,3,4,5,6,7,8,12,23,34,45,56,67,78];
let result = numbers.filter(function(currentValue){
  return currentValue % 2;
})

console.log(result);
//1,  3,  5, 7, 23, 45, 67
