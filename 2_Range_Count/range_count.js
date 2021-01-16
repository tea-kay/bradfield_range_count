/*
Range Count

Consider the problem of counting occurrences of a given value x within a sorted array a. For example, if
x = 5 and a = [1, 1, 2, 4, 5, 5, 7, 9], then the count is 2.

1. Write a function that solves this problem by performing a linear scan.
2. Next, write a function that solves this problem by performing two binary searches.
3. Finally, benchmark your two functions for random sorted arrays of size 10, 100, ..., up to
10,000,000. How does performance compare between the two functions? 

*/

const providedArray = [1, 1, 2, 4, 5, 5, 7, 7, 9, 9, 9, 10, 10, 11, 11];

// Linear Scan

const countOccurrences = (arr, x) => {
  return arr.reduce((acc, element) => {
    return x === element ? acc + 1 : acc;
  }, 0);
};
console.log(`Linear Search ${countOccurrences(providedArray, 9)}`);

// Binary Search

function binarySearch(arr, left, right, x) {
  if (right < left) {
    return -1;
  }
  let mid = left + (right - left) / 2;
  if (arr[mid] === x) {
    return mid;
  }
  if (arr[mid] > x) {
    return binarySearch(arr, left, mid - 1, x);
  }
  return binarySearch(arr, mid + 1, right, x);
}

function countOccurrencesBinary(arr, n, x) {
  let count;
  let left;
  let right
  let ind = binarySearch(arr, 0, n - 1, x);

  // If element is not present
  if (ind === -1) {
    return 0;
  }

  // Count elements on left side.
  count = 1;
  left = ind - 1;
  while (left >= 0 && arr[left] === x) {
    count += 1;
    left -= 1;
  }

  // Count elements on right side.
  right = ind + 1;
  while (right < n && arr[right] === x) {
    count += 1;
    right += 1;
  }
  return count;
}

console.log(`Binary Search ${countOccurrencesBinary(providedArray, providedArray.length, 9)}`);
