/* exported ransomCase */

/* want every other char uppercase
first character is always lowercase
1) assign lowercased string at 0 to new string variable
2) use a for loop starting at 1(2nd value) and end at length of string
2.5) if condition where if remainder of index/2 is 0, then lowercase string at stringIndex
2.55) else have it lowercased
3) return final string result */
function ransomCase(string) {
  var stringResult = string[0].toLowerCase();
  for (var stringIndex = 1; stringIndex < string.length; stringIndex++) {
    if (stringIndex % 2 === 0) {
      stringResult += string[stringIndex].toLowerCase();
    } else {
      stringResult += string[stringIndex].toUpperCase();
    }
  }
  return stringResult;
}
