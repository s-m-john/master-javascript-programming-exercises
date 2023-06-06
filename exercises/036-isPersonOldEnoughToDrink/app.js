function isPersonOldEnoughToDrink(person) {
  // Add your code after this line
  let age = person.age;
  
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

let obj = {
  age: 16
};

let output = isPersonOldEnoughToDrink(obj);
console.log(output); // Output: false
