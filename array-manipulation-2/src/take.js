/* exported take */

/* want to return array with count amount of values from original array in order
1) assign a new result array
2) set condition for when the input count is larger than the array length
2.5) condition should set count equal to length
3) use a for loop to cycle through input array and push values into result array
3.5) want to start at the beginning and end at the length
4) return result array */
function take(array, count) {
  var arrayResult = [];
  if (count > array.length) {
    count = array.length;
  }
  for (var arrayIndex = 0; arrayIndex < count; arrayIndex++) {
    arrayResult.push(array[arrayIndex]);
  }
  return arrayResult;
}
