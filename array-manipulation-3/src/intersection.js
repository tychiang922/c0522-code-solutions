/* exported intersection */

/* want to get the cutWord from the difference function and return it */
function intersection(first, second) {
  var cutWord = [];
  for (var firstIndex = 0; firstIndex < first.length; firstIndex++) {
    for (var secondIndex = 0; secondIndex < second.length; secondIndex++) {
      if (first[firstIndex] === second[secondIndex]) {
        cutWord.push(first[firstIndex]);
      }
    }
  }
  return cutWord;
}
