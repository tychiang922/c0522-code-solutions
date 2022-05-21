/* exported filterOutNulls */
function filterOutNulls(values) {
  var array = [];
  for (var valuesIndex = 0; valuesIndex < values.length; valuesIndex++) {
    if (values[valuesIndex] != null) {
      array.push(values[valuesIndex]);
    }
  }
  return array;
}
