/* exported swapChars */

/* want to swap string at firstIndex with string at secondIndex
While making result String can concat swapped indexes
1) define result string
2) use a loop to cycle thru string and input char into result (start: 0; end: length)
2.1) set conditions when index is at firstIndex or secondIndex to input swapped values
2.2) if no conditions are met, just add string at the stringindex
3) return result string */
function swapChars(firstIndex, secondIndex, string) {
  var result = '';
  for (var stringIndex = 0; stringIndex < string.length; stringIndex++) {
    if (stringIndex === firstIndex) {
      result += string[secondIndex];
      continue;
    } else if (stringIndex === secondIndex) {
      result += string[firstIndex];
      continue;
    }
    result += string[stringIndex];
  }
  return result;
}
