//Number Type
var num1 = 25
var num2 = 15.5
console.log(num1 + num2)

console.log('\n')
//String to number
//Format: parseInt(varname);
//Format: parseFloat(varname);
var num3 = '15.5'
console.log(num1 + parseFloat(num3))
console.log('\n')

//Number to string
//Format: varname.toString();
var num4 = 15.5
console.log(num4.toString())

//Fixed number of decimal
var num4 = 0.1
var num5 = 0.2
console.log(num4 + num5)
//Gives large precision value 
//So solution is to use toFixed()
//Format: varname.toFixed(number of decimal); 
var total = num4 + num5
total = total.toFixed(5)
console.log(total)

//Power Opertors
// **/	    
//m* / % (Feom left to Right)
//+ - (From Left to right)

console.log(3 ** 2.4) ;


//Loose Equality Operator ==
//Does not focus on type
let age = 22 ;
console.log(age == 22) 

//Strict Equality Operator ===
//Focus on type
console.log(age === 22) ;


//Type Conversion

//Format:: Number(varname) / String(varname) / Boolean(varname)
console.log("Type Conversion \n Format -- Number(varname) / String(varname) / Boolean(varname) \n")
let score = "22" ;
let Converted = Number(score) ;
console.log(Converted , typeof Converted) ;


let score2 = 22 ;
let Converted2 = String(score2) ;
console.log(Converted2 , typeof Converted2) ;

let score3 = "" ;
let Converted3 = Boolean(score3) ;
console.log(Converted3 , typeof Converted3) ;