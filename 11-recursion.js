// print numbers from 1 to n
function print1ToN(n) {
  if (n < 1) return;

  print1ToN(n - 1);
  console.log(n);
}

// print numbers from n to 1
function printNTo1(n) {
  if (n < 1) return;

  console.log(n);
  printNTo1(n - 1);
}

// power
function power(base, exponent) {
  if (exponent == 0) return 1;

  return base * power(base, exponent - 1);
}

function power2(base, exp) {
  if (exp === 0) return 1;

  const temp = power(base, Math.floor(exp / 2));
  let res = temp * temp;

  if (exp % 2 !== 0) res *= base;

  return res;
}

// decimal to binary
function dTB(num) {
  if (num == 0) return;

  dTB(Math.floor(num / 2));
  process.stdout.write((num % 2) + "");
}

// reverse a string
function reverseString(str) {
  if (str.length == 0) return "";

  return reverseString(str.slice(1)) + str[0];
}

// array sum using recursion
function arraySum(arr) {
  if (arr.length == 0) return 0;

  return arr[0] + arraySum(arr.slice(1));
}

// flatten array using recursion
function flattenArray(arr) {
  const res = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      const temp = flattenArray(el);
      res.push(...temp);
    } else res.push(el);
  }

  return res;
}

// string palindrome using recursion
function strPalindrome(str, start, end) {
  if (!str.length || start >= end) return true;
  if (str[start] !== str[end]) return false;

  return strPalindrome(start, start + 1, end - 1);
}

// string permutation using recursion`
function strPermutation(str) {
  const res = [];

  if (str.length == 0) return [""];

  for (let i = 0; i < str.length; i++) {
    const remainingStr = str.slice(0, i) + str.slice(i + 1);
    const perm = strPermutation(remainingStr);

    for (let j of perm) {
      res.push(str[i] + j);
    }
  }

  return res;
}

// array permutation
function permute(nums) {
  const ans = [];

  if (nums.length === 0) return [[]];

  for (let i = 0; i < nums.length; i++) {
    const rem = nums.slice(0, i).concat(nums.slice(i + 1));

    const perm = permute(rem);

    for (let el of perm) {
      ans.push([nums[i], ...el]);
    }
  }

  return ans;
}

// Given m, n count number of ways to reach from (0, 0) to (m, n) in a matrix
function countPaths(m, n) {
  if (m === 1 || n === 1) return 1;

  return countPaths(m - 1, n) + countPaths(m, n - 1);
}

function countPathsForLargerValues(m, n) {
  const memo = new Map();

  function helper(x, y) {
    if (x === 1 || y === 1) {
      return 1;
    }

    const memoKey = `${x}-${y}`;
    if (memo.has(memoKey)) {
      return memo.get(memoKey);
    }

    const result = helper(x - 1, y) + helper(x, y - 1);
    memo.set(memoKey, result);

    return result;
  }
  return helper(m, n);
}

// letter combination of a phone number
function letterCombination(digits) {
  const dTL = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const res = [];
  function helper(digits, str = "") {
    if (digits.length === 0) {
      res.push(str);
      return;
    }

    const key = digits[0];
    const letters = dTL[key];

    for (let i = 0; i < letters.length; i++) {
      helper(digits.slice(1), str + letters[i]);
    }
  }

  helper(digits);
  return res;
}
console.log(letterCombination("234"));
