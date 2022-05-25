/* exported zip */

/* want to create new array with each index being a merge of 1st and 2nd at that index
- if lengths are different, go with smaller one
1) define result array
2) define length as the smaller of first.length and second.length
3) use for loop to go thru 1st array ( can be either 1st or second but doesn't matter because length is of smaller)
    start: 0; end: var-length
3.1) push to result [1st[i], 2nd[i]]
4) return the result */

function zip(first, second) {
  var result = [];
  var length = Math.min(first.length, second.length);
  for (var firstIndex = 0; firstIndex < length; firstIndex++) {
    result.push([first[firstIndex], second[firstIndex]]);
  }
  return result;
}
