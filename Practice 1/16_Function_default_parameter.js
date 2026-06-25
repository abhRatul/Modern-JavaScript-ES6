// example 2
function number (x){
  console.log(x);
}

number() // undefined 

// example 3
function number2(x = 10){
  console.log(x);
}

number2(); // 10
number2(20); // 20