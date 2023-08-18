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
