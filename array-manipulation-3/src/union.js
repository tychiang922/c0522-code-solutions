/* exported union */

/* want to join first and second array and then apply unique function
1) define empty array
2) use for loops to push all of first and second array into the empty array
3) run unique function
4) return result */

function union(first, second) {
  var array = [];
  for (var fIndex = 0; fIndex < first.length; fIndex++) {
    array.push(first[fIndex]);
  }
  for (var sIndex = 0; sIndex < second.length; sIndex++) {
    array.push(second[sIndex]);
  }
  var sort = [];
  var result = [];
  for (var arrayIndex = 0; arrayIndex < array.length; arrayIndex++) {
    sort.push(array[arrayIndex]);
  }
  sort.sort();
  var uniqSort = [sort[0]];
  for (var sortIndex = 1; sortIndex < sort.length; sortIndex++) {
    if (sort[sortIndex] !== sort[sortIndex - 1]) {
      uniqSort.push(sort[sortIndex]);
    }
  }
  for (var arrayIndex2 = 0; arrayIndex2 < array.length; arrayIndex2++) {
    for (var unSortIndex = 0; unSortIndex < uniqSort.length; unSortIndex++) {
      if (array[arrayIndex2] === uniqSort[unSortIndex]) {
        uniqSort.splice(unSortIndex, 1);
        result.push(array[arrayIndex2]);
      }
    }
  }
  return result;
}
