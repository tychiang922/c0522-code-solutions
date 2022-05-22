/* exported chunk */

function chunk(array, size) {
  var result = [];
  var throwAway = [];
  if (array === []) {
    return [];
  }
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex += size) {
    throwAway = [];
    for (var sizeIndex = arrayIndex; sizeIndex < (arrayIndex + size); sizeIndex++) {
      if (sizeIndex > array.length - 1) {
        result.push(throwAway);
        return result;
      }
      throwAway.push(array[sizeIndex]);
    }
    result.push(throwAway);
  }
  return result;
}

/*
function chunk(array, size) {
  var result = [];
  var throwAway = [];
  var arrayIndex = 0;
  if (array === []) {
    return [];
  }
  while (arrayIndex < array.length) {
    throwAway = [];
    for (var sizeIndex = arrayIndex; sizeIndex < (arrayIndex + size); sizeIndex++) {
      if (sizeIndex > array.length - 1) {
        result.push(throwAway);
        return result;
      }
      throwAway.push(array[sizeIndex]);
    }
    result.push(throwAway);
    arrayIndex += size;
  }
  return result;
}
*/
