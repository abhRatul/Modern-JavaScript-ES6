let age = 11;
let type = '';

//Normal statement
if(age >= 18){
  type = 'Adult';
} else {
  type = 'Child'
}
console.log(type);

// with ternary operator

let ternaryType = age >= 18 ? 'Ternary Adult' : 'Ternary Child' ;

console.log(ternaryType);

//Nested Statement
if(age >= 18){
  type = 'Adult';
} else {
  if(age < 10) {
    type = 'Child'
  } else {
    type = 'Young'
  }
}

console.log(type);

// Nested ternary operator

let nestedTernary = age >= 18 ? "Nested Adult" 
                              : age < 10 
                              ? "Nested Child"
                              : "Nested Young";
console.log(nestedTernary);


