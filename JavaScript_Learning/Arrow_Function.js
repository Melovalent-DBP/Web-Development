//Arrow Function
//Arrow Function is an alternative way to write function
//It is fast
//No () , {} and return
//Format: const myFunction = (param1, param2) => {
  // return function body
//} 

//Call :  console.log(myFunction(p1 , p2));



let Invitation = name => `Welcome ${name} , Happy to see you.`
console.log(Invitation("DBP"));

let power = (num , exp) => num ** exp
console.log(power(5,2)) ;