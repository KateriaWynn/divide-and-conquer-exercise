/** Return the index of num in the array. */

//  0 1 2 3
// [3,4,1,2], 4 --> return 1

//  0  1  2  3  4  5  6  7
// [6, 7, 8, 9, 1, 2, 3, 4], 8 --> return 2

// [6, 7, 8, 9, 1, 2, 3, 4], 3 --> return 6
// [37,44,66,102,10,22], 14 --> return -1
// [6, 7, 8, 9, 1, 2, 3, 4], 12 --> return -1

function findRotatedIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      // Determining if searching left of mid or right of the mid
      if (arr[left] <= target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > arr[mid] && target <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
}

module.exports = findRotatedIndex;
