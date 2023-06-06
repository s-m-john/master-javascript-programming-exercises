function addFullNameProperty(person) {
  // Add your code after this line
  let fullname = person.firstName + " " + person.lastName
  person.fullName = fullname
  return person
}

let person = {
  firstName: 'Jade',
  lastName: 'Smith'
};

addFullNameProperty(person)
console.log(person.fullName)