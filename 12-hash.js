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
