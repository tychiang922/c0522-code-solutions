/* exported defaults */

/* want to move source properties into target properties
- if target property has a matching property, do not replace with source value
1) define a new source object with an empty object
2) use for in to copy source into new source
3) use for in loop on target object to remove all target keys from the new object
4) use for in loop to add all keys from new into target */
function defaults(target, source) {
  var newSrc = {};
  for (var srcKey in source) {
    newSrc[srcKey] = source[srcKey];
  }
  for (var tKey in target) {
    delete newSrc[tKey];
  }
  for (var newKey in newSrc) {
    target[newKey] = newSrc[newKey];
  }
}
