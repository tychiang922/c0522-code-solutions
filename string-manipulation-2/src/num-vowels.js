/* exported numVowels */

/* want to record how many vowels in string
1) define number to hold amt of vowels
2) define array vowels (both lower and uppercase)
3) use for loop starting at 0 and ending at the string length
3.1) inside loop, use another loop to cycle through vowels array
3.11) set condition where if string at its index is equal to vowel at its index, then increment vowelNumber and continue the loop
4) return the vowel Number */

function numVowels(string) {
  var vowelNum = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  for (var stringIndex = 0; stringIndex < string.length; stringIndex++) {
    for (var vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
      if (string[stringIndex] === vowels[vowelsIndex]) {
        vowelNum++;
        continue;
      }
    }
  }
  return vowelNum;
}
