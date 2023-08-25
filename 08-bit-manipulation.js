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
