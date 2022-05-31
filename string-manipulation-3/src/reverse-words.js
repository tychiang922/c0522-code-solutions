/* exported reverseWords */

/* want to reverse every word in a string
- consider splitting then reversing
1) define new variable that will contain the array from splitting the original string
2) define an empty result string
3) using for loop to cycle thru the split array (start: 0, end: length - 1)
3.1) Use another loop to reverse order if array at its index (start: array[i].length, end: 0)
3.11) Inside the loop, concatenate the reversed words as it runs ( result += array[i][x])
4) trim the end of result to remove the space
5) return result */
function reverseWords(string) {
  var stringSplit = string.split(' ');
  var result = '';
  for (var stringSplitIndex = 0; stringSplitIndex < stringSplit.length; stringSplitIndex++) {
    for (var stringSplitArray = stringSplit[stringSplitIndex].length - 1; stringSplitArray >= 0; stringSplitArray--) {
      result += stringSplit[stringSplitIndex][stringSplitArray];
    }
    result += ' ';
  }
  result = result.trimEnd();
  return result;
}
