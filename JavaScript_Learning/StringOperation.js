//Converting to lower/upper case
//Format: varname.toLowerCase();
//Format: varname.toUpperCase();
var promise = "My Name is Denesh Barua Pantho";
console.log(promise.toLowerCase());
console.log('\n')

//Searching index  word in a string
//Format: varname.indexOf('word');
//if not found , it will return -1
console.log(promise.indexOf('Barua'))
console.log(promise.indexOf('rafi'))
console.log('\n')

//Spliting a string into 
//Format: varname.split('word');
console.log(promise.split(' '));
console.log('\n')
console.log(promise.split('e'))
console.log('\n')
//Writing something inside the console while printing
console.log("The Spliting of the string in blank space is: " + promise.split(' '));