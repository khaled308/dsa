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
function strPermutation(str, ans = "", res = []) {
  if (str.length == 0) {
    res.push(ans);
    return res;
  }

  for (let i = 0; i < str.length; i++) {
    const subStr = str.slice(0, i) + str.slice(i + 1);
    strPermutation(subStr, ans + str[i], res);
  }

  return res;
}

function strPermutation2(str) {
  if (str.length === 0) return [""];

  const char = str[0];
  const subStr = str.slice(1);
  const result = [];
  const recResult = strPermutation2(subStr);

  for (let i = 0; i < recResult.length; i++) {
    for (let j = 0; j <= recResult[i].length; j++) {
      const temp = recResult[i].slice(0, j) + char + recResult[i].slice(j);
      result.push(temp);
    }
  }

  return result;
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

// find the first index if element in array or -1 if not present
function firstIndex(arr, ele, idx = 0) {
  if (idx >= arr.length) return -1;

  if (arr[idx] === ele) return idx;

  return firstIndex(arr, ele, idx + 1);
}

// find the last index if element in array or -1 if not present
function lastIndex(arr, ele) {
  const helper = (idx = arr.length - 1) => {
    if (idx < 0) return -1;

    if (arr[idx] == ele) return idx;

    return helper(idx - 1);
  };

  return helper();
}

// get all subsequences of a string
function allSubsequences(str) {
  if (str.length == 0) return [""];

  const char = str[0];
  const subStr = str.slice(1);
  const result = [];
  const recResult = allSubsequences(subStr);

  for (let i = 0; i < recResult.length; i++) {
    result.push(recResult[i]);
    result.push(char + recResult[i]);
  }

  return result;
}

// generate parenthesis
function generateParenthesis(n) {
  const res = [];

  const helper = (open = 0, closed = 0, cur = "") => {
    if (closed == n) {
      res.push(cur);
      return;
    }

    if (open < n) helper(open + 1, closed, cur + "(");

    if (open > closed) helper(open, closed + 1, cur + ")");
  };

  helper();
  return res;
}

// decode ways
function decodeWays(str) {
  const helper = (idx = 0) => {
    if (idx >= str.length) return 1;

    let res = 0;

    if (str[idx] !== "0") {
      res += helper(idx + 1);
    }

    if (
      idx + 1 < str.length &&
      str[idx] !== "0" &&
      parseInt(str.slice(idx, idx + 2)) <= 26
    ) {
      res += helper(idx + 2);
    }

    return res;
  };

  return helper();
}

// given a rope of length n, find the maximum number of pieces you can make such that the length of each piece is in set {a, b, c}
function maxPieces(n, a, b, c) {
  if (n <= 0) return n;

  const max = Math.max(
    maxPieces(n - a, a, b, c),
    maxPieces(n - b, a, b, c),
    maxPieces(n - c, a, b, c)
  );

  if (max < 0) return -1;

  return max + 1;
}

// tower of hanoi
function moveDisk(n) {
  function move(n, from, to, aux) {
    if (n == 1) {
      console.log(`move disk 1 from rod ${from} to rod ${to}`);
      return;
    }
    move(n - 1, from, aux, to);
    console.log(`move disk ${n} from rod ${from} to rod ${to}`);
    move(n - 1, aux, to, from);
  }

  return move(n, 1, 3, 2);
}

// K-th Symbol in Grammar
function kthGrammar(n, k) {
  if (n == 1) return 0;

  const parent = kthGrammar(n - 1, Math.ceil(k / 2));

  if (k % 2 == 0) {
    return parent === 0 ? 1 : 0;
  } else return parent;
}

// Find the Winner of the Circular Game
function findTheWinner(n, k) {
  function helper(n, k) {
    if (n == 1) return 0;

    return (helper(n - 1, k) + k) % n;
  }
  return helper(n, k) + 1;
}
