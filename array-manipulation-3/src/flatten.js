/* exported flatten */

/* want to push values inside of an array in an array into the outside array
1) define result array
2) run for loop to cycle thru array input (start: 0, end: length)
2.1) check if array[i] is an array and if true push array values into the result array
2.2) else push array[i] into result
3) return result */
function flatten(array) {
  var result = [];
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    if (Array.isArray(array[arrayIndex])) {
      for (var arr2Index = 0; arr2Index < array[arrayIndex].length; arr2Index++) {
        result.push(array[arrayIndex][arr2Index]);
      }
    } else {
      result.push(array[arrayIndex]);
    }
  }
  return result;
}
