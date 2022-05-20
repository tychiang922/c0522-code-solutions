/* exported tail */
/* want to return an array without 1st value
1) define new array
2) loop thru array starting at its 2nd value
3) add array at current index in loop to new array
4) loop finishes and return new array from the function */
function tail(array) {
  var newArray = [];
  for (var arrayIndex = 1; arrayIndex < array.length; arrayIndex++) {
    newArray.push(array[arrayIndex]);
  }
  return newArray;
}
