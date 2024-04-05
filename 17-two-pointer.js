// pair of elements in sorted array whose sum is equal to given number
function getPair(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const temp = arr[l] + arr[r];

    if (temp === target) return [arr[l], arr[r]];
    else if (temp > target) r--;
    else l++;
  }

  return null;
}

// count number of connective numbers that equal to num
function count(num) {
  let count = 0;
  let sum = 0;
  let left = 1;
  let right = 1;

  while (right <= num / 2) {
    sum += right;

    if (sum === num) count++;

    if (sum > num) {
      sum -= left;
      left++;
    } else right++;
  }

  return count;
}

// sort array of 0s & 1s
function sort(nums) {
  let s = 0,
    e = nums.length - 1;

  while (s < e) {
    if (nums[s] == 0) s++;
    else {
      [nums[s], nums[e]] = [nums[e], nums[s]];
      e--;
    }
  }

  return nums;
}

console.log(sort([0, 1, 1, 0, 1, 1, 1, 0]));
