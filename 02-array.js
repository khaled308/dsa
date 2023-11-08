// max element in array
function maxEle(nums) {
  let max = -Infinity;

  for (let num of nums) {
    if (num > max) max = num;
  }

  return max;
}

// second max element in array
function seconsMax(nums) {
  if (nums.length < 2) return null;

  let max = nums[0];
  let res = null;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      res = max;
      max = nums[i];
    } else if (nums[i] < max && (res === null || nums[i] > res)) {
      res = nums[i];
    }
  }

  return res;
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

// find subarray with given sum
function subArraySum(arr, sum) {
  let start = 0;
  let end = 0;
  let currentSum = 0;

  while (end < arr.length) {
    currentSum += arr[end];

    while (currentSum > sum && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === sum && start <= end) return arr.slice(start, end + 1);

    end++;
  }

  return null;
}

// rotate array by one
function rotateArrayByOne(arr) {
  const temp = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = temp;
  return arr;
}

// rotate array by given number
function rotateArray(arr, k = 1) {
  k = k % arr.length;

  for (let j = 0; j < k; j++) {
    const temp = arr[arr.length - 1];

    for (let i = arr.length - 1; i > 0; i--) {
      arr[i] = arr[i - 1];
    }

    arr[0] = temp;
  }

  return arr;
}

// leaders in array (question: 16 17 4 3 5 2, answer: 17 5 2)
function getLeaders(arr) {
  if (arr.length === 0) return [];

  let maxRight = arr[arr.length - 1];
  const res = [];
  res.push(maxRight);

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxRight) {
      res.push(arr[i]);
      maxRight = arr[i];
    }
  }

  return res.reverse();
}

console.log(getLeaders([16, 17, 4, 3, 5, 2]));
