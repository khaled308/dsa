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
