/* exported equal */
/* want to check if first array is strictly equal to second array and return true or false
1) check if lengths are the same and if not, return false
2) use for loop to go thru first array starting at 0 and ending at its length
2.1) if 1st[i] is not the same as 2nd[i], immediately end function and return false
3) if all checks complete without return, return true */

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var firstIndex = 0; firstIndex < first.length; firstIndex++) {
    if (second[firstIndex] !== first[firstIndex]) {
      return false;
    }
  }
  return true;
}
