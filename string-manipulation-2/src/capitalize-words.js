/* exported capitalizeWords */
/* want to split string into array based off 'space'
uppercase first char of each value in the array while lowercasing all others
concat all values of array with space between each one
1) define new array as the string.split(' ')
2) define stringResult
3) use a loop to cycle through the entire array starting at 0 and ending at length
3.1) set a condition where if its not the first value, than add a space before
3.2) define a new variable that will change periodically thru the array and assign the value of the array at the index
3.3) cap first letter of the new variable and assign to resultstring
3.4) use for loop to lowercase all other letters in the new variable and assign to stringResult
4) return the stringResult */

function capitalizeWords(string) {
  var stringResult = '';
  var array = string.split(' ');
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    if (arrayIndex !== 0) {
      stringResult += ' ';
    }
    var arrayValue = array[arrayIndex];
    stringResult += arrayValue[0].toUpperCase();
    for (var arrayValueIndex = 1; arrayValueIndex < arrayValue.length; arrayValueIndex++) {
      stringResult += arrayValue[arrayValueIndex].toLowerCase();
    }
  }
  return stringResult;
}
