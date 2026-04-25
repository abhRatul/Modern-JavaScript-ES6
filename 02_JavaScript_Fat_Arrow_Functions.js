// Normal function without parameter
function number(){
  return 10;
}

// Arrow function 
let numberArrow = () => {
  return 20;
}
// Arrow function with single return statement
let numberArrow2 = () => 30;

// Arrow function with single console log 
let numberArrow3 = () => console.log(10);


console.log(numberArrow2());
numberArrow3();
console.log(numberArrow());
console.log(number());


// Normal function with parameter
function numberParameter(n){
  return n;
}

// arrow function with single parameter
let numberArrowParameter = n => n;

// arrow function with multiple parameter
let numberArrowParameter2 = (a,b) => a + b;


console.log(numberArrowParameter(33));
console.log(numberArrowParameter2(33,33));

// Arrow function this keyword 

let javascript = {
  name: "Javascript",
  libraries: ["React","Angular","Vue"],
  printLibraries: function(){
    this.libraries.forEach(function(a){
      console.log(`${this.name} loves ${a}`);
    })
  }
}


javascript.printLibraries();
/* Notes
Output:
undefined loves React
undefined loves Angular
undefined loves Vue

Why undefined ?
In the forEach callback, the function runs in its own context, so it doesn't inherit 'this' from the parent object and instead uses the global context, making 'this' undefined."
*/

// Solution
let javascript2 = {
    name: "Javascript",
  libraries: ["React","Angular","Vue"],
  printLibraries: function(){
    this.libraries.forEach((a) => console.log(`${this.name} loves ${a}`));
  }
}

javascript2.printLibraries()

/* 
Notes
Arrow function tar immediate parent context theke capture kore.
Call,Apply,Bind not used in arrow function.
"Inside an event handler, if I create a custom callback function, I must use a normal function, not an arrow function, so that 'this' correctly refers to the element that triggered the event.
*/