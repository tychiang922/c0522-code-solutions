/* exported reverseWord */
/* Want to reverse order of char in the string
1) define new variable to hold the new word
2) loop thru a string starting at last index and ending at first index
3) In loop, concatenate string at the index to the new variable
4) return the new word from the function */
function reverseWord(string) {
  var word = '';
  for (var stringIndex = string.length - 1; stringIndex >= 0; stringIndex--) {
    word += string[stringIndex];
  }
  return word;
}
