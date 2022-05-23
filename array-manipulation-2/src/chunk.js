/* exported chunk */

/* want to separate array into chunks with size of input size
1) define empty array result
2) define a throwaway empty array to push into result after every size
3) use for loop to loop through array with start at 0 and end at length but increment of size
3.1) have throwAway reset to empty after every iteration
3.2) use another for loop starting at the previous loop index and ending at +size while inc. 1
3.21) set a condition where if the 2nd loop index goes above length of array minus 1, throwaway would be pushed into result and result be returned from function
3.22) if condition not met, push values of array at index into throwaway
3.3) if loop completes without running into the condition, push throwaway array into result array
3explained - Want to fill throwaway array with size amt of values from array and push it into result array once size is met
4) return the result */

function chunk(array, size) {
  var result = [];
  var throwAway = [];
  if (array === []) {
    return [];
  }
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex += size) {
    throwAway = [];
    for (var sizeIndex = arrayIndex; sizeIndex < (arrayIndex + size); sizeIndex++) {
      if (sizeIndex > array.length - 1) {
        result.push(throwAway);
        return result;
      }
      throwAway.push(array[sizeIndex]);
    }
    result.push(throwAway);
  }
  return result;
}

/* with while
function chunk(array, size) {
  var result = [];
  var throwAway = [];
  var arrayIndex = 0;
  if (array === []) {
    return [];
  }
  while (arrayIndex < array.length) {
    throwAway = [];
    for (var sizeIndex = arrayIndex; sizeIndex < (arrayIndex + size); sizeIndex++) {
      if (sizeIndex > array.length - 1) {
        result.push(throwAway);
        return result;
      }
      throwAway.push(array[sizeIndex]);
    }
    result.push(throwAway);
    arrayIndex += size;
  }
  return result;
}
*/
