/*
Notes
  - 1 level or maximum 2 level porjonto amra ternary operator use korbo
*/

let age = 6;

// if-else operation
if (age > 18) {
  console.log('Adult');
} else {
  console.log('Young');
}

//ternary operation
let value = age > 18 ? 'Adult' : (age < 7) ? 'Child' : 'Infant'
console.log(value);

// Bonus info
let a = 5
let b = a >= 5 ? true : false;
let c = a >= 5;
console.log('B : ', b);
console.log('C : ', c);
console.log(a >= 5);


