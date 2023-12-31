import "./style.css";


console.log(["z", "a", "b", "c"].sort());

/**
 * Sort the input.  I.e.
 * * The output will be a permutation of the input.
 * * The items will be in order.  For all n `list[n] < list[n+1]`.
 * * The algorithm will terminate in finite time.
 * @param list The input.  This will be modified in place.
 * @returns A sorted version of the input.  This is the same array that was provided as input.
 */
function sort(list: number[]) {
  function swap(index1: number, index2: number) {
    [list[index1], list[index2]] = [list[index2], list[index1]];
  }
  function isInOrder(): boolean {
    for (let i = 0; i < list.length - 1; i++) {
      if (list[i] > list[i + 1]) {
        swap(i, i + 1);
        return false;
      }
    }
    return true;
  }
  function howManyProblems() {
    let problemCount = 0;
    for (let i = 0; i < list.length; i++) {
      for (let j = i + 1; j < list.length; j++) {
        if (list[i] > list[j]) {
          problemCount++;
        }
      }
    }
    return problemCount;
  }
  while (true) {
    console.log(`Problem count = ${howManyProblems()}`);
    if (isInOrder()) {
      return list;
    }
  }
}

(window as any).philSort = sort;
console.log("Try philSort([1,9,2,8,4,7]);");
