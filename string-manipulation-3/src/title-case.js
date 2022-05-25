/* exported titleCase */
function titleCase(title) {
  var titleSplit = title.split(' ');
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var minorTally = false;
  var result = '';

  for (var titleSplitIndex = 0; titleSplitIndex < titleSplit.length; titleSplitIndex++) {
    minorTally = false;
    if (titleSplit[titleSplitIndex].toLowerCase() === 'javascript') {
      result += 'JavaScript ';
      continue;
    } else if (titleSplit[titleSplitIndex].toLowerCase() === 'api') {
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
  result = hyphenCheck[0] + '-';
  for (var hIndex = 0; hIndex < hyphenCheck.length; hIndex++) {
    result = hyphenCheck[hIndex][0].toUpperCase() + hyphenCheck[hIndex].substring(1);
  }
  // for (var titleSplitIndex = 1; titleSplitIndex < titleSplit.length; titleSplitIndex++) {
  //   minorWordsTally = 0;
  //   if (titleSplit[titleSplitIndex].toLowerCase() === 'javascript') {
  //     result += 'JavaScript';
  //   } else if (titleSplit[titleSplitIndex].toLowerCase() === 'api') {
  //     result += 'API';
  //   } else if (titleSplit[titleSplitIndex].length >= 4) {
  //     result += titleSplit[titleSplitIndex][0].toUpperCase();
  //     for (var indexIndex = 1; indexIndex < titleSplit[titleSplitIndex].length; indexIndex++) {
  //       result += titleSplit[titleSplitIndex][indexIndex].toLowerCase();
  //     }
  //   } else if (titleSplit[titleSplitIndex].length < 4) {
  //     for (var minorWordsIndex = 0; minorWordsIndex < minorWords.length; minorWordsIndex++) {
  //       if (titleSplit[titleSplitIndex].toLowerCase() === minorWords[minorWordsIndex]) {
  //         result += minorWords[minorWordsIndex].toLowerCase();
  //         minorWordsTally++;
  //       }
  //     }
  //     if (minorWordsTally === 0) {
  //       result += titleSplit[titleSplitIndex][0].toUpperCase();
  //       for (var sIndex = 1; sIndex < titleSplit[titleSplitIndex].length; sIndex++) {
  //         result += titleSplit[titleSplitIndex][sIndex].toLowerCase();
  //       }
  //     }
  //   }
  //   result += ' ';
  // }
  // /* run check for hyphens */
  // var resultSplitHyphen = result.split('-');
  // if (resultSplitHyphen.length > 1) {
  //   result = resultSplitHyphen[0];
  //   for (var resultSplitHyphenIndex = 0; resultSplitHyphenIndex < resultSplitHyphen.length; resultSplitHyphen++) {
  //     result += resultSplitHyphen[resultSplitHyphenIndex][0].toUpperCase();
  //     for (var hypIndex = 1; hypIndex < resultSplitHyphen[resultSplitHyphenIndex].length; hypIndex++) {
  //       result += resultSplitHyphen[resultSplitHyphenIndex][hypIndex].toLowerCase();
  //     }
  //     if (resultSplitHyphenIndex < resultSplitHyphen.length - 1) {
  //       result += '-';
  //     }
  //   }
  // }
  return result.trim();
}
