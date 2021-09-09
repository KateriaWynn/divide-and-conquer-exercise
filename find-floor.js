function findFloor(arr, num) {
  left = 0;
  right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let prev = mid - 1;
    let next = mid + 1;

    if (num < arr[left]) {
      return -1;
    }

    if (arr[mid] > num) {
      // focus on the left and look for smaller element
      if (prev <= num) {
        return prev;
      }
    } else if (arr[mid] < num) {
      // focus on the right and look for the largest element
      // this is the last element then
      return arr[right];
    } else {
      right = prev;
    }
  }
  return -1;
}

module.exports = findFloor;
