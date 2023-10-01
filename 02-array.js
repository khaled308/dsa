// max element in array
function maxEle(nums) {
  let max = -Infinity;

  for (let num of nums) {
    if (num > max) max = num;
  }

  return max;
}

// check if array is sorted
function isSorted(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return false;
  }
  return true;
}

// count number of elements that have at least one element greater than itself
function count(nums) {
  const max = Math.max(...nums);
  let c = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != max) c++;
  }
  return c;
}

// find unique element in array
function unique(nums) {
  const freq = {};
  let found = -1;

  for (let i = 0; i < nums.length; i++) {
    const key = nums[i];
    freq[key] = freq[key] ? ++freq[key] : 1;
  }

  for (let key of nums) {
    if (freq[key] == 1) {
      found = key;
      break;
    }
  }
  return found;
}

// find missing number in array
function missingNum(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;

  for (let num of arr) {
    actualSum += num;
  }

  return expectedSum - actualSum;
}

// min max sum
function maxSubarraySum(nums) {
  let maxSum = -Infinity;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (maxSum < sum) maxSum = sum;
    if (sum < 0) sum = 0;
  }
  return maxSum;
}

// print all sub arrays
function printAllSubArrays(nums) {
  for (let start = 0; start < nums.length; start++) {
    for (let end = start; end < nums.length; end++) {
      for (let i = start; i <= end; i++) {
        process.stdout.write(nums[i] + "");
      }
      console.log();
    }
  }
}

// Remove Duplicates from Sorted Array
function removeDuplicates(nums) {
  let j = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  nums.length = j + 1;
}

// move all zeros to end
function moveZeros(nums) {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  for (j = j + 1; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
}
