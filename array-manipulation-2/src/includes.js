/* exported includes */

/* want to check if input is inside array
1) use for loop to check input against array at index values
1.1) set a condition where if they do match, immediately return true
2) if loop does manage to finish, return false value */
function includes(array, input) {
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    if (input === array[arrayIndex]) {
      return true;
    }
  }
  return false;
}
