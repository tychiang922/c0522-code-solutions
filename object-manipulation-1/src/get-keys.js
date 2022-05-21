/* exported getKeys */

/* get an array of object properties
- define new array
- use a for...in lops to get keys of the object
- return the new array */
function getKeys(object) {
  var array = [];
  for (var key in object) {
    array.push(key);
  }
  return array;
}
