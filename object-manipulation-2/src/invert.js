/* exported invert */

/* want to switch value with keys
1) define new object result
2) use for in to assign key to new value title key in result
3) return result */
function invert(source) {
  var result = {};
  for (var key in source) {
    result[source[key]] = key;
  }
  return result;
}
