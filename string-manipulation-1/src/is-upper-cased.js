/* exported isUpperCased */
/* check if everything is uppercased
- loop thru each character in word
- if something is not uppercased, want to return false
- if loop finishes without return false, return true */
function isUpperCased(word) {
  for (var wordIndex = 0; wordIndex < word.length; wordIndex++) {
    if (word[wordIndex] !== word[wordIndex].toUpperCase()) {
      return false;
    }
  }
  return true;
}
