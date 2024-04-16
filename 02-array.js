// max element in array
function maxEle(nums) {
  let max = -Infinity;

  for (let num of nums) {
    if (num > max) max = num;
  }

  return max;
}

// second max element in array
function secondMax(nums) {
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

// maximum difference between two elements in array such that larger element appears after smaller element
function maxDifference(arr) {
  if (arr.length < 2) return null;

  let minEle = arr[0];
  let maxDiff = arr[1] - arr[0];

  for (let i = 1; i < arr.length; i++) {
    maxDiff = Math.max(maxDiff, arr[i] - minEle);
    minEle = Math.min(arr[i], minEle);
  }

  return maxDiff;
}

// stock buy sell to maximize profit
function stockBuyAndSell(prices) {
  let min = prices[0];
  let profit = prices[1] - prices[0];

  for (let i = 1; i < prices.length; i++) {
    profit = Math.max(prices[i] - min, profit);
    min = Math.min(min, prices[i]);
  }

  return profit < 0 ? 0 : profit;
}

// max consecutive ones in binary array
function countMaxConsecutiveOnes(arr) {
  let max = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count = 0;
    } else {
      count++;
      max = Math.max(max, count);
    }
  }

  return Math.max(max, count);
}

// maximum length even odd sub array
function maximumLength(arr) {
  if (!arr.length) return 0;

  let sum = 0;
  let res = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 === arr[i + 1] % 2) sum = 0;
    else {
      sum++;
      if (i + 1 == arr.length - 1) sum++;
      res = Math.max(res, sum);
    }
  }
  return res;
}

// equilibrium index
function equilibriumIndex(nums) {
  if (nums.length < 3) return -1;

  let total = nums.reduce((a, b) => a + b, 0);
  let sumL = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const sumR = total - sumL - nums[i];
    if (sumL === sumR) return i;

    sumL += nums[i];
  }

  return -1;
}

// find a sub array of size k with the least average
function subArrayWithLeastAvg(nums, k) {
  let sum = 0;
  let end = 0;
  let avg = Infinity;

  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  for (let i = k; i < nums.length; i++) {
    if (sum / k < avg) {
      avg = sum / k;
      end = i - 1;
    }
    sum -= nums[i - k];
    sum += nums[i];
  }

  if (sum / k < avg) end = nums.length - 1;

  return nums.slice(end + 1 - k, end + 1);
}

// 3 sum
const threeSum = (nums) => {
  nums.sort((a, b) => a - b);
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let start = i + 1;
    let end = nums.length - 1;

    while (start < end) {
      const sum = nums[i] + nums[start] + nums[end];
      if (sum === 0) {
        let n1 = nums[start];
        let n2 = nums[end];

        res.push([nums[i], n1, n2]);

        while (start < end && n1 == nums[start]) start++;

        while (start < end && n2 == nums[end]) end--;
      } else if (sum > 0) end--;
      else start++;
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
