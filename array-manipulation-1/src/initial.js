/* exported initial */
/* want to return an array minus last value
1) define new array
2) use a loop starting at its first value and ending right before its last value
3) want to return the new array from the function */
function initial(array) {
  var newArray = [];
  for (var arrayIndex = 0; arrayIndex < array.length - 1; arrayIndex++) {
    newArray.push(array[arrayIndex]);
  }
  return newArray;
}
