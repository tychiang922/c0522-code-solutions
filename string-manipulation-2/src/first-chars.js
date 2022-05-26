/* exported firstChars */

/* basically truncate but without concatenating '...' */
function firstChars(length, string) {
  var stringResult = '';
  if (string !== '') {
    if (length > string.length) {
      length = string.length;
    }
    for (var stringIndex = 0; stringIndex < length; stringIndex++) {
      stringResult += string[stringIndex];
    }
  }
  return stringResult;
}
