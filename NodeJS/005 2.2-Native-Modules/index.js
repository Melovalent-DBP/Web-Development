// fs is a built-in module in Node.js that allows you to work with the file system
/*
    Write-format:
     fs.writeFile(file, data, [options], callback =>{
        if(error) throw error;
        console.log("The file has been saved!");
    }
    read-format:
    fs.readFile(file, [options], (err,data) =>{
        if(err) throw err;
        console.log(data);
    }

*/
const fs = require('fs')  // for reading and writing files

// fs.writeFile("message.txt", "Hye , this is DBP's first NodeJs Code.", (DBP_Does_Error) =>{
//     if(DBP_Does_Error) throw DBP_Does_Error;
//     console.log("The file has been saved!");
// });

fs.writeFile("message2.txt" , "Hello , brother." , (error) => {
    if(error) throw error ;
    console.log("Saved !!!")
}) ;

fs.readFile("message.txt", "utf8" , (err,data) => {
    if(err) throw err ;
    console.log(data);
});


