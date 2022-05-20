/* exported includesSeven */
function includesSeven(array) {
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    if (array[arrayIndex] === 7) {
      return true;
    }
  }
  return false;
}
