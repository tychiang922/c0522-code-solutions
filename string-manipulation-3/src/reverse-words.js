/* exported reverseWords */

function reverseWords(string) {
  var stringSplit = string.split(' ');
  var result = '';
  for (var stringSplitIndex = 0; stringSplitIndex < stringSplit.length; stringSplitIndex++) {
    for (var stringSplitArray = stringSplit[stringSplitIndex].length - 1; stringSplitArray >= 0; stringSplitArray--) {
      result += stringSplit[stringSplitIndex][stringSplitArray];
    }
    result += ' ';
  }
  result.trim();
  return result;
}
