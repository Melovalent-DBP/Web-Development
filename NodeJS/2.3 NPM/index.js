//Initializing npm
//just like playing legos, we can use npm to install packages and use them in our code
//npm init
//npm install  pckg1 pckg2 pckg3


//Using es6 import
//type: module is used in package.json
// import name from "package-name";


//var generateName = require("sillyname");
var sillyName = generateName();
console.log(`My name is ${sillyName}`);
//backtick is used for string interpolation


//using es6 import
//type: module is used in package.json
import generateName from "sillyname";
var sillyName = generateName();
console.log(`His name is ${sillyName}`);

import superheros from "superheroes";
var SuperHeroName = superheros.random();
console.log(`My Superhero name is ${SuperHeroName}`);
