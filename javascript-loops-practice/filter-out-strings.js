/* exported filterOutStrings */
function filterOutStrings(values) {
  var filterArray = [];
  for (var valuesIndex = 0; valuesIndex < values.length; valuesIndex++) {
    if (typeof values[valuesIndex] !== 'string') {
      filterArray.push(values[valuesIndex]);
    }
  }
  return filterArray;
}
