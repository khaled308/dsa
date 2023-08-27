// given a number, set its i'th bit
function setBit(n, i) {
  return n | (1 << i);
}

// given a number, toggle its i'th bit
function toggleBit(n, i) {
  return n ^ (1 << i);
}

// given a number, clear its i'th bit
function clearBit(n, i) {
  const mask = ~(1 << i);
  return n & mask;
}

// given a number, check if its i'th bit is set or not
function isBitSet(n, i) {
  const mask = 1 << i;
  return (n & mask) !== 0;
}

// given a number, count number of set bits
function countSetBits(n) {
  let count = 0;

  while (n) {
    count += n & 1;
    n = n >> 1;
  }

  return count;
}

// given array of numbers, every number occurs twice except one, find that number
function unique(nums) {
  let res = nums[0];

  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i];
  }
  return res;
}
