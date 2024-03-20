//"This" calls the  object calling the method in which "this" is "present"

let person = {
    firstname: "DBP" ,
    lastname : "Denesh" ,
    city     : "Chittagong" ,
    Education: "CSE" ,
    birthyear: "2003" ,
    getsummary: function(){
        return `${this.firstname} ${this.lastname} lives in ${this.city}. He is born in ${this.birthyear}. He is from ${this.education} background` ;
    } 
}

console.log(person.getsummary());

