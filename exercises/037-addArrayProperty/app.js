function addArrayProperty(obj, key, arr) {
  // Add your code after this line
  Object.defineProperty(obj, key, { value: arr });
}

let myObj = {};
let myArray = [1, 3];

console.log(myObj); // Output: {}
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj); // Output: { myProperty: [1, 3] }
console.log(myObj.myProperty); // Output: [1, 3]
