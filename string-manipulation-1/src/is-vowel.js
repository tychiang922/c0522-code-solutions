/* exported isVowel */
/* Want to check if char is a vowel
1) define what vowels are - var vowel = [all the vowels + uppercase vowels]
2) loop thru the vowel array checking char with each value of the array
3) if char === vowel, then I want to return true
4) if loop finishes without a return, return false */
function isVowel(char) {
  var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var vowelIndex = 0; vowelIndex < vowel.length; vowelIndex++) {
    if (vowel[vowelIndex] === char) {
      return true;
    }
  }
  return false;
}
