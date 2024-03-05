//let only works in the scope it is defined in

let a = 10;
let b = 20;
let c = 30;

{
    let a = 66 ;
    console.log(a) ;
}
console.log(a) ;
// a is not 66 because let only works in the scope it is defined in


//Object is a collection of properties
//Object is a collection of key value pairs

let o = {
    name: "Denesh" ,
    
}