/* exported sumAll */
function sumAll(number) {
  var sum = 0;
  for (var numIndex = 0; numIndex < number.length; numIndex++) {
    sum += number[numIndex];
  }
  return sum;
}
