/*
- Creates a new array containing only the elements that pass a condition
- Does not modify the original array 
- Returns an array
- Can be chained with method like map(),sort(),reduce()
- Returns [] if none matched

Use cases
- Remove unwanted values
- Search for multiple matching items
- Filter products
- Filter Users 
- Filter completed Task 
- Remove duplicates conbined with other methods
- Data cleaning
*/

let numbers = [4,5,8,9,34,56,78,23,55,77,99];
let newArray = numbers.filter((number)=>{
  return number % 11 === 0;
})
console.log(newArray);

const users = [
  { name: "John", active: true },
  { name: "Alice", active: false },
  { name: "Bob", active: true }
];

const newUsers = users.filter((user)=>{
  return user.active;
})

console.log(newUsers);

