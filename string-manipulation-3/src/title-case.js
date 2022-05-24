/* exported titleCase */
function titleCase(title) {
  var titleSplit = title.split(' ');
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var result = titleSplit[0][0].toUpperCase() + titleSplit[0].substring(1).toLowerCase() + ' ';
  for (var titleSplitIndex = 1; titleSplitIndex < titleSplit.length; titleSplitIndex++) {
    if (titleSplit[titleSplitIndex].toLowerCase() === 'javascript') {
      result += 'JavaScript';
    } else if (titleSplit[titleSplitIndex].toLowerCase() === 'api') {
      result += 'API';
    } else if (titleSplit[titleSplitIndex].length >= 4) {
      result += titleSplit[titleSplitIndex][0].toUpperCase();
      for (var indexIndex = 1; indexIndex < titleSplit[titleSplitIndex].length; indexIndex++) {
        result += titleSplit[titleSplitIndex][indexIndex].toLowerCase();
      }
    } else if (titleSplit[titleSplitIndex].length < 4) {
      for (var minorWordsIndex = 0; minorWordsIndex < minorWords.length; minorWordsIndex++) {
        if (titleSplit[titleSplitIndex].toLowerCase() === minorWords[minorWordsIndex]) {
          result += minorWords[minorWordsIndex].toLowerCase();
        }
      }
    }
    /* stuck on condition for less then 4 letter word thats not a minor word */
    result += ' ';
  }
  return result.trim();
}
