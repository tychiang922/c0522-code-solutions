/* exported compact */
/* remove falsy from array
-define new result array
-use loop to cycle through array
-in loop check if array at index is truthy or falsy
-if not "false", continue
-if true, push
-return result */
function compact(array) {
  var result = [];
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    if (!array[arrayIndex]) {
      continue;
    }
    result.push(array[arrayIndex]);
  }
  return result;
}
