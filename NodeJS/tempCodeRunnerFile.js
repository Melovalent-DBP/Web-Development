const fs2 = require('fs2') ;
fs2.writeFile("message2.txt" , "Hello , brother." , (error) => {
    if(error) throw error ;
    console.log("Saved !!!")
}) ;