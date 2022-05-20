/* exported findIndex */
function findIndex(array, value) {
  var index = -1;
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    if (array[arrayIndex] === value) {
      index = arrayIndex;
      return index;
    }
  }
  return index;
}
