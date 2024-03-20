//Higher Order function 
//: A function that takes another function as an argument or returns a function

let uppercase = (str) => str.toUpperCase() 

let lowercase = (str) => str.toLowerCase()

let transformer = (str , fun) => fun(str)

console.log(transformer("hello coders", uppercase))

//:Function returning another function

let compliment = function(msg){
    return function(name){
        console.log(`${name} : ${msg}`) ;
    }
}

console.log(compliment("hello coders")("DBP")) ;

//2nd Method
let complimented = compliment("hello coders") ;
complimented("DBP") ;