/* exported pick */

/* want to select key and output object with key and value
1) define result object
2) use a for loop to get keys and input into result object
2.1) have a condition where if the input key is not in the object, skip the iteration
2.2) in loop, set the result at key at index to source at key at index
3) return the result */
function pick(source, keys) {
  var result = {};
  for (var keysIndex = 0; keysIndex < keys.length; keysIndex++) {
    if (source[keys[keysIndex]] === undefined) {
      continue;
    }
    result[keys[keysIndex]] = source[keys[keysIndex]];
  }
  return result;
}
