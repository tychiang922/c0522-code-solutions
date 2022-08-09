/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  for (let i = 0; i < index; i++) {
    const deq = queue.dequeue();
    if (queue.peek() === undefined) {
      return deq;
    }
    queue.enqueue(deq);
  }
  const result = queue.dequeue();
  return result;
}
