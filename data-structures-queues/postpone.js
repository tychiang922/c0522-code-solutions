/* exported postpone */

function postpone(queue) {
  if (queue.peek() === undefined) {
    return queue.peek();
  }
  const deq = queue.dequeue();
  queue.enqueue(deq);
}
