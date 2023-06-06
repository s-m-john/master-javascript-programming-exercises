function isOldEnoughToDrink(age){
    // your code here
    let legalAge = 21
    if (age >= legalAge){
         return true
    } else {
        return false
    }
}

let output = isOldEnoughToDrink(22);
console.log(output);