//Object Syntax
/*
    let object = {
        key1: value1,
        key2: value2,
     ...   
    }
*/

let car = {
    color: "black" ,
    model: "2024" ,
    company:"Honda" ,
}

//Accessing JS objects
console.log("Accessing all objects") ;
console.log(car) ;


console.log("Accessing specific property") ;
let propertyname = "color" ;
console.log(car[propertyname]) ;
console.log(car.color) ;

//Modifying the objects
car.color = "red" ;
console.log(car.color) ;
car["color"] = "yellow" ;
console.log(car.color) ;

//Deleting properties of object
let obj = {
    prop1: "value1" ,
    prop2: "value2" ,
    prop3: "value3",
    prop4: "value4",
    prop5: "value5",
    prop6: "value6",
    prop7: "value7",
}

delete obj.prop1 ;
console.log(obj.prop1) ;
delete obj["prop2"] ;

let returnValue = delete obj["prop3"] ;
console.log(obj.prop3 , returnValue) ;
