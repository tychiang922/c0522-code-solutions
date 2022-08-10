/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const nList = new LinkedList(value);
  nList.next = list;
  return nList;
}
