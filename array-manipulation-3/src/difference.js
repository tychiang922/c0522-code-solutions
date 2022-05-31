/* exported difference */

/* want to return alue that is different between both input arrays
1) define result array
2) define an array to hold words that want to be cut out
3) define a isCut counter for cutword check
4) use a for loop of the first array and another for loop of the second array to compare against each other
  if they match, want to push that value into the cut words array
5) use a for loop inside of another for loop to check first array against cut words array
  if they match, set isCut to true and break the cut word loop
  once cutword loop ends, have a condition where if iscut is still false, push the value into the result array
6) do step 5 but with second array
7) return the result */

function difference(first, second) {
  var result = [];
  var cutWord = [];
  var isCut = false;
  for (var firstIndex = 0; firstIndex < first.length; firstIndex++) {
    for (var secondIndex = 0; secondIndex < second.length; secondIndex++) {
      if (first[firstIndex] === second[secondIndex]) {
        cutWord.push(first[firstIndex]);
      }
    }
  }
  for (var firstI = 0; firstI < first.length; firstI++) {
    isCut = false;
    for (var cutIndex = 0; cutIndex < cutWord.length; cutIndex++) {
      if (first[firstI] === cutWord[cutIndex]) {
        isCut = true;
        break;
      }
    }
    if (isCut === false) {
      result.push(first[firstI]);
    }
  }
  for (var secondI = 0; secondI < second.length; secondI++) {
    isCut = false;
    for (var cutIndex2 = 0; cutIndex2 < cutWord.length; cutIndex2++) {
      if (second[secondI] === cutWord[cutIndex2]) {
        isCut = true;
        break;
      }
    }
    if (isCut === false) {
      result.push(second[secondI]);
    }
  }
  return result;
}
