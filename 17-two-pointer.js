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
