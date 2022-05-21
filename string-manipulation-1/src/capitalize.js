/* exported capitalize */

/* word at 0 to be capitalized
everything else to be undercased
1) create a var with the first letter of word capitalized
2) Use a loop to concatenate the rest of word[i] lowercased
*/
function capitalize(word) {
  var wordResult = word[0].toUpperCase();
  for (var wordIndex = 1; wordIndex < word.length; wordIndex++) {
    wordResult += word[wordIndex].toLowerCase();
  }
  return wordResult;
}
