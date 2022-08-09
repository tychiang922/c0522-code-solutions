/* exported maxValue */

function maxValue(stack) {
  let big = stack.pop();
  while (stack.peek() !== undefined) {
    const newPop = stack.pop();
    if (newPop > big) {
      big = newPop;
    }
  }
  if (big === undefined) {
    big = -Infinity;
  }
  return big;
}
