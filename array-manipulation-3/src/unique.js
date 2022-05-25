/* exported unique */

/* want to creat new array with each value occuring only once
1) define new array that will hold current array
2) define result array
3) use for loop to copy array into the new value
4) sort that new array
5) define a new array that will hold all of the uniq values out of order and also give it the value of the 0 index of sort
6) use a for loop of sort to cycle thru the sorted array (because its sorted, all copies will be next to each other)
6.1) use an if condition where if the current index is not the same as the last, push the value into the uniqSort array
7) Use a for loop to check the input array against uniqsorted array and if they match, splice/remove the value from uniqsort until uniqsort has no values left
8) return result */
function unique(array) {
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
