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
console.log(promise.lastIndexOf('Barua'))
console.log('\n')

//Spliting a string into 
//Format: varname.split('word');
console.log("The Spliting of the string in blank space is: " + '\n');
console.log(promise.split(' '));
console.log('\n')
console.log("The Spliting of the string in e is:" + '\n' + promise.split('e'))
console.log('\n')

//Writing something inside the console while printing
console.log("The Spliting of the string in blank space is: " + promise.split(' '));

//Returning if any word is found in the string
//Format: varname.includes('word');
let str = "Include@" ;
console.log(str.includes('@')) ;


//Trim property auto removes the white spaces from the string

let str3 = "I am a large fella" ;
console.log(str3.trim()) ;

console.log('\n');
//Common String Methods

//trim: removes the white spaces from the string
console.log("Common String Methods:") ;
let hobbies = ' coding reading running ' ;
console.log(hobbies) ;
console.log("\"Printing without spaces\"") ;
console.log(hobbies.trim()) ;
console.log('\n') ;
//slice: removes the remaining part of the string
let fullname = "Denesh Barua Pantho" ;
console.log("Slicing means including index 0 to 4") ;
console.log(fullname.slice(0,5)) ;


//Strings are immutable
//means we can't change the string directly by changing str[i]
let Str = "Denesh" ;
Str[0] = "R" ;
Str[1] = "A" ;
console.log(Str) ; //It will print Denesh , not RAnesh