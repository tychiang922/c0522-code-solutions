/* exported toObject */

/* want to assign 1st value of keyvaluepair to property of object and assign 2nd value of keyvaluepair to value of the property
- define new object
- assign keyvaluepair at 1 to keyvaluepair at 0 of new object
- return the object from the function */
function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
