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

// * return indices of two numbers whose sum is equal to given number
function twoSum(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    const sum = nums[start] + nums[end];

    if (sum == target) return [start, end];
    else if (sum > target) end--;
    else start++;
  }

  return [];
}

// find first and last occurrence of a number in sorted array
function find(nums, target) {
  let start = 0;
  let end = nums.length;
  let i = -1;
  let j = -1;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      i = mid;
      end = mid - 1;
    } else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  start = 0;
  end = nums.length;

  while (start <= end) {
    const mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      j = mid;
      start = mid + 1;
    } else if (nums[mid] > target) end = mid - 1;
    else start = mid + 1;
  }

  return [i, j];
}
