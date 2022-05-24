/* exported takeRight */

/* basically take but adjust for-loop to start at the length of the array minus the input count value */
function takeRight(array, count) {
  var arrayResult = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var arrayIndex = array.length - count; arrayIndex < array.length; arrayIndex++) {
    arrayResult.push(array[arrayIndex]);
  }
  return arrayResult;
}
