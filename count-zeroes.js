/** Returns the number of zeroes in the array */

// [] --> return 0
// [1,1,1,1] --> return 0
// [0,0,0] --> return array.length
// [1,0,0,0,0] --> return the number of 0s ==> 4

//  0 1 2 3 4 5
// [1,1,1,1,0,0] --> return the number of 0s ==> 2
//  L   M     R  let mid = Math.floor((L + R) /2)
//      L M   R  recalc the mid = 3
//        L M R  recalc the mid = 4
//        L R    since my L and R have a difference of 1 I know that the array[L] = 1 and the array[R] = 0

// so, that this value of array[R] is the fist indication of where the zeros happen so can return the length - index where the first zero occurs
// length - rightIndex

// mid is 1 so everything to the left of this mid is going to be 1
// so, change L to be where the M is

// mid is 0 so everything above this mid is going to be 0
// so, chance R to be where the M is

// Constraint: 0(log n) --> Divide and conquer/Binary search

// Big O is 0(log n) because dividing a half into half each time
// if the length is 0 return 0
// if the last element is 1 return 0
// if the first element is 0 return the length of the array
// declare left, right and mid pointers

// 1st step: Take care of edge cases
// 2nd step: Take care of process of assigning left, right, and mid while left and right are not next to each other (have to interpret this visually to understand what to do here) - while loop

// if the length is 0 return 0
// if the last element is 1 return 0
// if the first element is 0 return the length of the array

// while left + 1 !== right (because we are going to keep going until both are equal)
// find the mid
// if the array[mid] is 1
// reassign the left to mid
// else (if array[mid] is 0)
// reassign the right to mid

// once the reassignments are done and we are out of the while loop we know we can return the first occurance of zero now. This means length - current index can be updated to length - right. --> return length - right

// Challenge solved! Great job!!

function countZeroes(array) {
  if (array.length === 0 || array[array.length - 1] === 1) return 0;
  if (array[0] === 0) return array.length;
  let left = 0;
  let right = array.length - 1;

  while (left + 1 !== right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === 1) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return array.length - right;
}

module.exports = countZeroes;
