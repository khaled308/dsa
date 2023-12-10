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

console.log(unique([1, 2, 2, 3, 4, 4, 4, 5, 5]));
