// linear search
function linearSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) return i;
  }
  return -1;
}

// binary search
function binarySearch(arr, num) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === num) return mid;
    else if (arr[mid] > num) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}

// square root
function squareRoot(num) {
  let start = 0;
  let end = num;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (mid * mid === num) return mid;
    else if (mid * mid > num) end = mid - 1;
    else start = mid + 1;
  }

  return end;
}
