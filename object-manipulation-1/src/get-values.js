/* exported getValues */

/* want to get all values from every property in the object
- define array
- use a forin loop to cycle thru the object
- in loop, push object at the key into the new array
- return the new array from the function */
function getValues(object) {
  var array = [];
  for (var key in object) {
    array.push(object[key]);
  }
  return array;
}
