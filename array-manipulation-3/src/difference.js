/* exported difference */

function difference(first, second) {
  var result = [];
  var firstArr = [];
  for (var firstI = 0; firstI < first.length; firstI++) {
    firstArr.push(first[firstI]);
  }
  var secondArr = [];
  for (var secondI = 0; secondI < second.length; secondI++) {
    secondArr.push(second[secondI]);
  }
  for (var firstIndex = 0; firstIndex < first.length; firstIndex++) {
    for (var secondIndex = 0; secondIndex < second.length; secondIndex++) {
      if (first[firstIndex] === second[secondIndex]) {
        firstArr.splice(firstIndex, 1);
        secondArr.splice(secondIndex, 1);
      }
    }
  }
  for (var i = 0; i < firstArr.length; i++) {
    result.push(firstArr[i]);
  }
  for (var x = 0; x < secondArr.length; x++) {
    result.push(secondArr[x]);
  }
  return result;
}
