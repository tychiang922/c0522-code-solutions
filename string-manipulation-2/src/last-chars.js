/* exported lastChars */

/* basically firstChars but want to get the last length of chars in order
- change stringIndex value to length of the string minus length */
function lastChars(length, string) {
  var stringResult = '';
  if (string !== '') {
    if (length > string.length) {
      length = string.length;
    }
    for (var stringIndex = string.length - length; stringIndex < string.length; stringIndex++) {
      stringResult += string[stringIndex];
    }
  }
  return stringResult;
}
