//SetTimeout(function and SetInterval(function)

//SetTimeout -> Run Function "once" after "interval" of time
//setInterval -> Run Function "Repeatedly" , Starting after
//interval of time , then repeating....

//Syntax::
//SetTimeout(func|code , delay , arg1 , arg2 , .....) ;
//SetInterval(func|code , delay , arg1 , arg2 , .....) ;

let greeting = (name) => { console.log(`Hi ${name} Welcome to DBP's Shrine`) }
setTimeout(greeting , 1000 , "DBP") ;

setInterval(greeting , 1000 , "Denesh") ; //Repeating