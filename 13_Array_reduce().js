/*
Notes-
- Array.reduce()
- Do not change the main array
- It works like a snowball rolling down a hill. It starts small, and as it passes through each element of the array, it collects information and grows until it reaches the bottom.

It takes two main arguments:
  # The Callback Function: This runs for every item and takes two primary inputs:
  # Accumulator: The "running total" or the result from the previous step.
  # Current Value: The specific item in the array being processed right now.
  # Initial Value: (Optional but recommended) The value you want to start the accumulator with.

3. Why It’s Used For
We use reduce() when we need to transform an array into a different format or perform a cumulative calculation. Common use cases include:
1) Summing numbers: Adding up a list of prices or scores.
2) Grouping data: Turning a list of users into an object grouped by age or role.
3) Flattening: Turning an array of arrays into one single flat array.
4) Counting occurrences: Finding out how many times a specific word appears in a list.
*/

// Example
let numbers = [1,2,3,4,5,6];
let sum = numbers.reduce(function(acc,currVal){
  return acc + currVal;
},1000);

console.log(sum);

