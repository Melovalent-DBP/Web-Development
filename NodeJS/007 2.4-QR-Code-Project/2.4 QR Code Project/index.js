/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

//Part 1,2 done
//Part 3
import inquirer from 'inquirer'; //means we are importing the inquirer package from the node_modules folder
import qr from "qr-image"; //means we are importing the qr-image package from the node_modules folder
import fs from "fs"; //means we are importing the fs package from the node_modules folder
 
inquirer.prompt([
    /* Pass your questions in here */
    {
        message: "Type your URL:",  //creating object with message key
        name: "URL",
    },
  ])
  .then((answers) => { 
    // Use user feedback for... whatever!!
    const url = answers.URL; //storing the user input in a variable , here url means the user input and URL means the key of the object
    var qr_svg = qr.image(url); //creating a qr code image of the user input
    qr_svg.pipe(fs.createWriteStream("qr_img.png")); //.pipe is used to write the qr code image to a file.
    fs.writeFile('urlOfQr.txt', url , function (err) {
        if (err) throw err;
        console.log('The File has been Saved!');
      });                                              //here we are creating a file qr_img.png and writing the qr code image to it
    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

