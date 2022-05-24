/* exported drop */
/* same as take but loop should start at the count and end at its length */

function drop(array, count) {
  var arrayResult = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var arrayIndex = count; arrayIndex < array.length; arrayIndex++) {
    arrayResult.push(array[arrayIndex]);
  }
  return arrayResult;
}
