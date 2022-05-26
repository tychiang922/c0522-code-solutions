/* exported truncate */

/* want to cut down string to length specified and concat "..." to final string value
1) define new string
2) set conditions in case if length is greater than string.length or if string is empty
2.1) if length > string.length, set the length to match string length
2.2) have string be empty if no string is input
3) set a loop starting at 0 and ending at the value of length
4) in loop, add and assign the value of string[index] with new string
5) concat '...' to string after loop and conditions
6) return string */
function truncate(length, string) {
  var stringResult = '';
  if (string !== '') {
    if (length > string.length) {
      length = string.length;
    }
    for (var stringIndex = 0; stringIndex < length; stringIndex++) {
      stringResult += string[stringIndex];
    }
  }
  stringResult += '...';
  return stringResult;
}
