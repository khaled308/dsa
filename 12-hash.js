// find pair of elements in array whose sum is equal to given number
const findPair = (nums, k) => {
  const pairs = new Map();

  for (let i = 0; i < nums.length; i++) {
    const key = k - nums[i];

    if (pairs.has(nums[i])) return [key, nums[i]];

    pairs.set(key, i);
  }
  return [];
};

// Find first non-repeating character of given String
function getFirstUnique(str) {
  const m = new Map();

  for (let c of str) {
    const val = m.get(c);

    if (val) m.set(c, val + 1);
    else m.set(c, 1);
  }

  for (let c of str) {
    if (m.get(c) === 1) return c;
  }

  return null;
}

// Remove duplicates from Sorted Array
function unique(arr) {
  const m = new Map();

  for (let i = 0; i < arr.length; i++) {
    m.set(arr[i], true);
  }

  return Array(...m.keys());
}

// Intersection of Two Arrays
function intersection(arr1, arr2) {
  const m = new Map();
  const resultMap = new Map();

  for (let el of arr1) {
    m.set(el, true);
  }

  for (let el of arr2) {
    if (m.get(el)) resultMap.set(el, true);
  }

  return [...resultMap.keys()];
}

// check if arr[i] + arr[j] = arr[k] + arr[l]
function isPairsExist(arr) {
  const m = new Map();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const key = arr[i] + arr[j];

      if (m.has(key)) {
        const indices = m.get(key);

        if (indices[0] !== i && indices[1] !== j) {
          return true;
        }
      }

      m.set(key, [i, j]);
    }
  }

  return false;
}

// count number of sub arrays sum equals k
function countSubArrays(nums, k) {
  let count = 0;
  let sum = 0;
  let m = new Map();

  m.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (m.has(sum - k)) count += m.get(sum - k);

    m.set(sum, (m.get(sum) || 0) + 1);
  }

  return count;
}
