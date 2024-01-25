//Conditional Statement
//Format: if(condition){ } 
//Format: if(condition){ } elseif(condition){ } else{ }
//Format: if(condition){ } elseif(condition){ } elseif(condition){ } else{ }


var num1 = 2000
if(num1 % 2 == 0){
    console.log("Even Number")
}
else{
    console.log("Odd Number")
}

(num1 % 400 == 0) ? console.log("Leap Year") : ( (num1 % 4 == 0) && (num1 % 100 !=0) ? console.log("Leap Year") : console.log("Not Leap Year") )