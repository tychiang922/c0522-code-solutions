/* exported isPalindromic */

function isPalindromic(string) {
  var noSpace = string.replaceAll(' ', '');
  var reverse = '';
  for (var noSpaceIndex = noSpace.length - 1; noSpaceIndex >= 0; noSpaceIndex--) {
    reverse += noSpace[noSpaceIndex];
  }
  return reverse === noSpace;
}
