//Methods: Function declared inside object


//Age Calculation Function


let person = {
        agecalculate: (birthyear) => {
        let age = 2024 - birthyear ;
        return age;
    }
}
console.log(`Current age is ${person.agecalculate(2003)}`) ;



