/* exported dropRight */
/* basically just take but want the loop to end at the length of the array minus the input count value */

function dropRight(array, count) {
  var arrayResult = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var arrayIndex = 0; arrayIndex < array.length - count; arrayIndex++) {
    arrayResult.push(array[arrayIndex]);
  }
  return arrayResult;
}
