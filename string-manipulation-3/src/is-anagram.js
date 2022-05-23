/* exported isAnagram */

/* want to check whether first string char = second string char without being in order
1) define var to hold first string
2) define var to hold second string
3) use for loop to replace first string char against second string char and replace with nothing
4) use same loop to do the same to second string against first string
5) remove all spaces within both string 1 and string 2
6) return the boolean of string 1 strictly equal to string 2 */
function isAnagram(firstString, secondString) {
  var string1 = firstString;
  var string2 = secondString;
  for (var secondStringIndex = 0; secondStringIndex < secondString.length; secondStringIndex++) {
    string1 = string1.replace(secondString[secondStringIndex], '');
  }
  for (var firstStringIndex = 0; firstStringIndex < firstString.length; firstStringIndex++) {
    string2 = string2.replace(firstString[firstStringIndex], '');
  }
  string1 = string1.replaceAll(' ', '');
  string2 = string2.replaceAll(' ', '');
  return string1 === string2;
}
