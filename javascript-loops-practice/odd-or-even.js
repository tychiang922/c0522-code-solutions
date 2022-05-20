/* exported oddOrEven */
function oddOrEven(numbers) {
  var array = [];
  for (var numbersIndex = 0; numbersIndex < numbers.length; numbersIndex++) {
    if (numbers[numbersIndex] % 2 === 0) {
      array.push('even');
    } else {
      array.push('odd');
    }
  }
  return array;
}
