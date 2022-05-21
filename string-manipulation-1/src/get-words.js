/* exported getWords */
/* want to split string into an array based on space
1) define a variable that will hold the split up array
2) set variable equal to the string that .split(' ')
3) set a condition where if the string is empty/spaces, the array will be empty
4) return the variable to the function */
function getWords(string) {
  var stringArray = string.split(' ');
  if (string === '') {
    stringArray = [];
  }
  return stringArray;
}
