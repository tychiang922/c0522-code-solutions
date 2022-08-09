/* exported takeSmaller */

function takeSmaller(queue) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }
  const first = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return first;
  }
  const second = queue.dequeue();
  queue.enqueue(Math.max(first, second));
  return Math.min(first, second);
}
