/*
Notes
  - Returns the first match and stop
  - returns undefined if no match found
  - Does not mutate the original array
  - যে element-এর জন্য callback প্রথম true return করবে, সেই element-টাই find() return করবে।
  - array.find(function(element, index, array) {
    // return true or false
  });
*/

let numbers = [1,2,3,4,5,6,7,8,9,10];

// My way
let result = numbers.find(function(currentValue){
  if(currentValue > 4){
    return currentValue
  }
})
console.log(result);

// Good way 1
let result2 = numbers.find(function(number){
  let currentValue = number > 4;
  if(currentValue){
    return number
  }
})
console.log(result2);

// Best way 
let result3 = numbers.find(function(number){
  if(number > 5) {
    return number
  }
})

console.log(result3);

// Perfect way
let result4 = numbers.find(function(number){
  return number > 6
})
console.log(result4);

// Opps ways 
let result5 = numbers.find(number => number > 7)
console.log(result5);



