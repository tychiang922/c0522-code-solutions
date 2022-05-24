/* exported omit */

/* want to creat new object without inputed keys
must manually create matching source array
1) define a result object
2) use for in loop to copy source to result object
3) use for in loop to delete result at keys at keys index
4) return the result */
function omit(source, keys) {
  var result = {};
  for (var key in source) {
    result[key] = source[key];
  }
  for (var keysIndex = 0; keysIndex < keys.length; keysIndex++) {
    delete result[keys[keysIndex]];
  }
  return result;
}
