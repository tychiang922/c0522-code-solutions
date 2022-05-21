/* exported countdown */
function countdown(number) {
  var numberArray = [];
  for (var num = number; num >= 0; num--) {
    numberArray.push(num);
  }
  return numberArray;
}
