function isPersonOldEnoughToDrinkAndDrive(person) {
  // the person object contains an "age" property inside
  let age = person.age;

  // Add your code after this line

  if (age >= 16 && age >= 21) {
    return true;
  } else {
    return false;
  }
}

let obj = {
  age: 45
};

let output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // Output: false