function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let prev = mid - 1;
    let next = mid + 1;

    if (arr[left] <= arr[right]) {
      return left;
    }
    if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
      return mid;
    }

    if (arr[left] <= arr[right]) {
      return left;
    } else if (arr[mid] <= arr[right]) {
      right = prev;
    } else if (arr[mid] >= arr[left]) {
      left = next;
    }
  }
}

module.exports = findRotationCount;
