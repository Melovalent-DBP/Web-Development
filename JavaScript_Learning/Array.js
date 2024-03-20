//Array Declaration
// var arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr); //printing all element
//Array of specific size : new Array(size)
var arr = new Array(10) ;
arr = [1,2,3,4,5,6,7,8,9,10];
console.log("Elements of first array: " + arr); //printing first element
//Position of an element : array.indexOf(element)
//Length of an array: array.length
console.log(arr.indexOf(5)); //printing position of an element
console.log(arr.length); //printing length of an array
console.log('\n\n')

//Adding an element in the last:  array.push(element)
//Adding an element in the first: array.unshift(element)
//Removing an element from the last: array.pop()
//Removing an element from the first: array.shift()
//Removing an element by index position: array.splice(index,how many element) [Original array will be changed]
//Specific portion of an array: array.slice(starting index, ending index) [Excluding ending index ] [But original array will not be changed]
arr.push(11);
console.log('Adding 11 at last : ' + arr);

arr.unshift(0.01)
console.log('Adding 0.01 at the beginning : ' + arr);

arr.shift();
console.log('Removing first element : ' + arr);

arr.pop();
console.log('Removing last element : ' + arr);

//VVI THing
//The Original array will not be changed during slicing
var sliced_array = arr.slice(3,7);
console.log('Printing specific portion (index 3 to upto 7) : ' + sliced_array);

arr.splice(0,4);
console.log('Removing first 4 elements : ' + arr) ;
/


//Splicing specific index
// arr.splice(2,1); //splice(index,how many element)
var arr = ['DBP' , 'Rafi' , 'Dolon' , 'Nizami' , 'Nino']
var part  = arr.splice(2,2) //SPlicing two element  from index 2
console.log(part+ '\n')


//Join Mehthod [VVI]: It will join the array elements with the given string
console.log(arr.join(' ')) ;
let Joined = arr.join('$') ;
console.log(Joined) ;

//Concatenation of two arrays
//Format: array1.concat(array2)
var dishess = ['Biryani' , 'Kacchi' , 'Burger' , 'Pizza'] ;
var dishes2 = ['Ice Cream' , 'Biscuit' , 'Cake' , 'Pastry'] ;
console.log(dishess.concat(dishes2)) ;
dishes2.push('sprite');
console.log(dishes2) ; 