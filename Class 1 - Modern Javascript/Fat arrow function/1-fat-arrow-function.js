
/*
Arrow function declaration - single line
  1.Jodi single parameter and only single statement tahke tahole evabe likha zabe.
  2.If we add return on the statement then we need to use the paranthesis 
*/
const showNumber = n => console.log(n);
const showLetter = l => l;
const showBody = b => { 
  return b;
}  

showNumber(2);
console.log(showLetter('a'));
console.log(showBody(true));


/* 
  This confusion appear and confusioni solved with arrow function
*/

const javascript = {
  name: "Javascript",
  libraries: ["React","Angular","Vue"],
  printLibraries: function(){
    this.libraries.forEach(function(item){
      console.log(`${this.name} loves ${item}`);
    })
  }
}

javascript.printLibraries();

/* 
Output:
  loves React
  loves Angular
  loves Vue
Ekahane this er value passe na kno ?
  - printLibraries method er vitore this hosse ( javascript ) object 
  - Foreach er callback hisebe amra normal function use koresi
  - normal function er nijosso this thake
  - tai callback function er this (javascript) object ke target kore na 

Solution
  - arrow function nijer this create kore na 
  - arrow function tar outer scope er this use kore
  - tai callback ke arrow function banale this hobe (Javascript object)
*/

const newJavascript = {
  name: 'Javascript',
  libraries: ['React','Vue','Angular'],
  printLibraries: function(){
    this.libraries.forEach(item=> console.log(`${this.name} loves ${item}`))
  }
}

newJavascript.printLibraries()





