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


