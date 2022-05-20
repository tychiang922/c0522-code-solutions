/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixArray = [];
  for (var wordsIndex = 0; wordsIndex < words.length; wordsIndex++) {
    suffixArray.push(words[wordsIndex] + suffix);
  }
  return suffixArray;
}
