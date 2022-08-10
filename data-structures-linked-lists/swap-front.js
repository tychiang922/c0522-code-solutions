/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const one = list.data;
    list.data = list.next.data;
    list.next.data = one;
    return list;
  }
  return list;
}
