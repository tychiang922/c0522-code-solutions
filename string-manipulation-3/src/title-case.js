/* exported titleCase */
/* want to run multiple checks on an input string
Conditions:
- 1) if its the first word of a string, want to capitalize it while lowercasing everything else
- 2) if its either JavaScript or API, want to have it always written as JavaScript or API
- 3) if its part of a minor words such as and or but and if not always cap first letter and lowercase all other letters
- 4) if there's a hyphen, cap both sides
- 5) if there's a colon, want to capitalize the next word after the colon
1) assign a variable to title split by space
2) assign an array of words that will contain minor words
3) assign a minor tally boolean for the minor words check
if this boolean returns false, it should always capitalize first word of the index and lowercase all else
and if not, it should lowercase all letters
4) assign an empty string for the result return
5) use a for loop to go through title split by space to check for conditions: 1, 2, 3
Reset minor Tally to false at the beginning of every loop
5.2) condition2 Use an if condition that checks whether the lowercase version of the string at the index starts with javascript or api
if condition is true than have it return the correct spelling format
use another if condition to check whether the end of the string is t or i and if not, then push the true end of the string along with a space

5.1) condition1 check if index is 0 and if so uppercase first letter and lowercase all other letters

5.3) condition3 use a for loop and check the current index against the new for loop index of minor words
if it matches, set minorTally to true and lowercase all letters in current indexed word
once for loop finishes, check whether minorTally is false and if so capitalize first letter and lowercase all others

6) Once space loop has completed, create a new variable to check for hyphens that splits the result by hyphens
7) Use if condition to check whether the array is larger than 1 and if not, then its safe to assume there weren't any hyphens in original string
7.1) if condition returns true, run a for loop through each of the indexes in the hyphen check
7.11) capitalize first letter and lowercase all letters and add a hyphen to the end of all indexes except for the last one and concat to result

8) Run a colon check by creating a new variable to check for colons by splitting result by ': '
9) Run the same things as step 7-7.11 except concat ': ' to all the ends instead of hyphen
10) Return a trimmed version of the result
*/

function titleCase(title) {
  var titleSplit = title.split(' ');
  var minorWords = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  var minorTally = false;
  var result = '';

  for (var titleSplitIndex = 0; titleSplitIndex < titleSplit.length; titleSplitIndex++) {
    minorTally = false;
    if (titleSplit[titleSplitIndex].toLowerCase().startsWith('javascript') === true) {
      result += 'JavaScript';
      if (titleSplit[titleSplitIndex][titleSplit[titleSplitIndex].length - 1].toLowerCase() !== 't') {
        result += titleSplit[titleSplitIndex][titleSplit[titleSplitIndex].length - 1];
      }
      result += ' ';
      continue;
    } else if (titleSplit[titleSplitIndex].toLowerCase().startsWith('api') === true) {
      result += 'API';
      if (titleSplit[titleSplitIndex][titleSplit[titleSplitIndex].length - 1].toLowerCase() !== 'i') {
        result += titleSplit[titleSplitIndex][titleSplit[titleSplitIndex].length - 1];
      }
      result += ' ';
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
