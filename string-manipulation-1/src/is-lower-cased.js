/* exported isLowerCased */
/* Do the same thing as uppercase
- only difference is replace .toUpperCase with .toLowerCase */
function isLowerCased(word) {
  for (var wordIndex = 0; wordIndex < word.length; wordIndex++) {
    if (word[wordIndex] !== word[wordIndex].toLowerCase()) {
      return false;
    }
  }
  return true;
}
