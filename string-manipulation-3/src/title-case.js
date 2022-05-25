/* exported titleCase */
function titleCase(title) {
  var titleSplit = title.split(' ');
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var minorTally = false;
  var result = '';

  for (var titleSplitIndex = 0; titleSplitIndex < titleSplit.length; titleSplitIndex++) {
    minorTally = false;
    if (titleSplit[titleSplitIndex].toLowerCase().startsWith('javascript') === true) {
      result += 'JavaScript';
      // if (titleSplit[titleSplitIndex][titleSplit[titleSplitIndex].length - 1] !== 't') {
      //   result += titleSplit[titleSplitIndex][titleSplit[titleSplitIndex].length - 1];
      // }
      continue;
    } else if (titleSplit[titleSplitIndex].toLowerCase().startsWith('api') === true) {
      result += 'API ';
      continue;
    } else if (titleSplitIndex === 0) {
      result = titleSplit[0][0].toUpperCase() + titleSplit[0].substring(1).toLowerCase() + ' ';
      continue;
    }
    for (var minorIndex = 0; minorIndex < minorWords.length; minorIndex++) {
      if (titleSplit[titleSplitIndex].toLowerCase() === minorWords[minorIndex]) {
        result += minorWords[minorIndex] + ' ';
        minorTally = true;
        break;
      }
    }
    if (minorTally === false) {
      result += titleSplit[titleSplitIndex][0].toUpperCase() + titleSplit[titleSplitIndex].substring(1).toLowerCase() + ' ';
    }
  }

  var hyphenCheck = result.split('-');
  if (hyphenCheck.length > 1) {
    result = hyphenCheck[0] + '-';
    for (var hIndex = 1; hIndex < hyphenCheck.length; hIndex++) {
      result += hyphenCheck[hIndex][0].toUpperCase() + hyphenCheck[hIndex].substring(1);
      if (hIndex < hyphenCheck.length - 1) {
        result += '-';
      }
    }
  }

  var colonCheck = result.split(': ');
  if (colonCheck.length > 1) {
    result = colonCheck[0] + ': ';
    for (var cIndex = 1; cIndex < colonCheck.length; cIndex++) {
      result += colonCheck[cIndex][0].toUpperCase() + colonCheck[cIndex].substring(1);
      if (cIndex < colonCheck.length - 1) {
        result += ': ';
      }
    }
  }

  return result.trim();
}
