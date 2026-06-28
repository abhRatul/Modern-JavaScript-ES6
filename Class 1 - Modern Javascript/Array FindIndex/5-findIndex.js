let numbers = [1,1,3,4,5,6,7];

let result = numbers.findIndex((number)=> number === 4)
console.log(result);

let result2 = numbers.findIndex((number)=> !(number % 2));
console.log(result2);

