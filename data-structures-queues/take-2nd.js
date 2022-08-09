/* exported take2nd */

function take2nd(queue) {
  if (typeof queue.peek() === 'undefined') {
    return undefined;
  }
  const deq = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return deq;
  }
  const sec = queue.dequeue();
  queue.enqueue(deq);
  return sec;
}
