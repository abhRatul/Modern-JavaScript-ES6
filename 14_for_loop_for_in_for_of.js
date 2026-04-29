// For loop - Best for: Find the exact index position 
// example
for(let i = 0; i<= 5; i++){
  console.log(i);
}

// For...in Loop 
// Best for object itaration
const car = { make: "Tesla", model: "Model 3", year: 2024 };
for(let item in car){
  console.log(item +': '+ car[item]);
}

// For...of Loop
// Iterating over Arrays, Strings, or Maps.

const fruits = ["Apple", "Banana", "Cherry"];
for(let value of fruits){
  console.log(value);
  
}