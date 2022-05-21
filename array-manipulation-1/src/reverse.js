/* exported reverse */
/* want to reverse array order
1) dfine new array
2) use a loop starting at its last value and ending at its 1st value
3) in loop, push value into new array
4) return the new array from the function */
function reverse(array) {
  var newArray = [];
  for (var arrayIndex = array.length - 1; arrayIndex >= 0; arrayIndex--) {
    newArray.push(array[arrayIndex]);
  }
  return newArray;
}
