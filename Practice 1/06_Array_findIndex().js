/* Notes
  Array.prototype.findIndex()
  - Array.prototype.findIndex() হলো এমন একটা method যা condition match করা প্রথম element-এর index return করে 🔥
*/

let numbers = [21,22,34,56,43,21,34,12,43,55];
let result1 = numbers.findIndex(function(currentValue){
  return currentValue % 2;
})

console.log(result1);
/*
Output 0.
findIndex() callback এর ভিতরে যেটা return করা হয়,
সেটা strict boolean হতে হবে না — JavaScript এটাকে
truthy / falsy হিসেবে evaluate করে।

এখানে currentValue % 2 ব্যবহার করা হয়েছে:

- even number হলে → 0 (falsy)
- odd number হলে → 1 (truthy)

findIndex() প্রথম যেই element এর জন্য truthy value পায়,
সেই element এর index return করে।

এই array এর প্রথম element 21,
এবং 21 % 2 = 1 (truthy),
তাই সাথে সাথেই index 0 return হয়েছে।
*/


let result2 = numbers.findIndex(function(currentValue){
  return currentValue > 2000;
})

console.log(result2);
// jodi kono value index kheje na pay tahole -1 return korbe.


