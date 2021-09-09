/** Returns the occurrences of the number in the array */

// [], any number --> return -1
// [1,1,2,2,2,2,3], 4 --> return -1 ==> if number > array[array.length - 1]

// Below: The first 3 occurs at index 6 and length of this array is 7
// Notice that 7 - 6 = 1 -> length - current index
//  0 1 2 3 4 5 6
// [1,1,2,2,2,2,3], 3 --> return the number of 3s ==> 1
//  L     M     R         let middleIndex = Math.floor((L + R) / 2);
//        L M   R         recalc the middleIndex = 4
//          L M R         recalc the middleIndex = 5
//            L R         since my L and R have a difference of 1 I know that value array[L] = 2 and array[R] = 3

// mid is element 2 so everything to the left is going to be < number
// so, change L to be where M is

// so, this value of array[R] is the first indication of where the number occurs so can return the array.length - array[R] (the length of the array - index where the first occurance of the number begins aka R )
// so, that this value of array[R] is the fist indication of where the zeros happen so can return the length - index where the first zero occurs
// length - rightIndex

//  0 1 2 3 4 5 6
// [1,1,2,2,2,2,3], 2 --> return the number of 2s --> 4
//  L     M     R   let middleIndex = Math.floor((L + R) / 2);
//  L           R

// mid is 2 and there still are 2s on either side,
// so, change L and r

// [1,1,2,2,2,2,3], 1 --> return the number of 1s

// Constraint: 0(log n) --> Divide and conquer
// Big O is 0(log n) because dividing a half into half each time

// if the length is 0 return 0
// if number is greater than the last element return 0

// if the length is 0 return 0
// if number is greater than the last element return 0
// declare left, right, and mid pointers

// while left + 1 !== right (because we are going to keep going until both are equal)
// find the middleIndex
// if array[middleIndex] < number
// reassign the left to middleIndex
// else if the element is greater than the number
// return array.length - right
// else (if element equals numbers )

// once the reassignments are done and we are out of the while loop we know we can return the first occurance of the number now. This means length - current index can be updated to length - right. --> return length - right

function sortedFrequency(array, number) {
  if (array.length === 0 || number > array[array.length - 1]) return -1;
  let left = 0;
  let right = array.length - 1;

  while (left + 1 !== right) {
    let middleIndex = Math.floor((left + right) / 2);

    if (array[middleIndex] < number) {
      left = middleIndex;
    } else if (array[middleIndex] > number || array[middleIndex] === number) {
      right = middleIndex - 1;
    }
  }
  return array.length - right;
}

module.exports = sortedFrequency;
