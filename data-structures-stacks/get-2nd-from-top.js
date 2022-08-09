/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return stack.peek();
  }
  const one = stack.pop();
  const two = stack.peek();
  stack.push(one);
  return two;
}
