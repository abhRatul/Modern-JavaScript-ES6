/* Notes
# Array.prototype.find()
# Array.find(): Old array ke change kore na 
*/

// Example
let numbers = [1,2,3,4,5,6,7,8];
let newNumber = numbers.find(function(curretValue){
  return curretValue > 4;
},this)

console.log(newNumber);



// With class Example 
class Student {
  constructor(name,age){
    this.name = name,
    this.age = age;
  }

  greet(){
    console.log('Welcome');
  }

  exampleFindFunction(){
    let array = [1,2,3,4];
    array.find(function(element){
      this.greet()
    },this)
  }
}

let S = new Student('Abh', 29);
S.exampleFindFunction()

/* Notes
  when you use the find method inside a class method, and you provide a regular function as the callback, that regular function doesn't automatically inherit the class's this context. In order to fix this, you need to explicitly bind the function using .bind(this). Alternatively, if you use an arrow function, it will automatically capture the surrounding this context. In short, using an arrow function ensures that the this inside the callback refers to the class instance, so you don't need to bind it manually.
*/




