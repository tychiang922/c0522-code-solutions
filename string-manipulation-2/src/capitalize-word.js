/* exported capitalizeWord */

/* want to uppercase first letter and everything else lowercase
set condition for javascript case
1) define new string
2) set condition where if word.toLowerCase === javascript, return 'JavaScript'
3) assign string at 0 uppercased to string
4) use a for loop start at 0 and end at length of word
4.5) add and assign lowercased word at wordIndex to string
5) return the string from the function */
function capitalizeWord(word) {
  var string = '';
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }
  string = word[0].toUpperCase();
  for (var wordIndex = 1; wordIndex < word.length; wordIndex++) {
    string += word[wordIndex].toLowerCase();
  }
  return string;
}
