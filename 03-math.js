// sum of digits of a number
function digitsSum(num) {
  let res = 0;
  num = Math.abs(num);

  while (num) {
    res += num % 10;
    num = Math.floor(num / 10);
  }

  return res;
}

// power
function power(base, exp) {
  let res = 1;

  while (exp > 0) {
    if (exp % 2 == 1) {
      res *= base;
    }

    base *= base;
    exp = Math.floor(exp / 2);
  }
  return res;
}

// fibonacci series
function fibonacciSeries(num) {
  if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }

  let prev = 0;
  let current = 1;

  while (num > 1) {
    let next = prev + current;
    prev = current;
    current = next;
    num--;
  }
  return current;
}

// armstrong number
function armstrongNumber(num) {
  let n = num;
  let sum = 0;

  while (n > 0) {
    const digit = n % 10;
    sum += Math.pow(digit, 3);
    n = Math.floor(n / 10);
  }

  return sum === num;
}

// all divisors
function printAllDivisors(num) {
  for (let i = 1; i * i <= num; i++) {
    if (num % i == 0) {
      console.log(i, num / i);
    }
  }
}

// GCD
function GCD(a, b) {
  a = a < 0 ? -a : a;
  b = b < 0 ? -b : b;

  if (b === 0) {
    return a;
  }

  return GCD(b, a % b);
}

// count number of digits in a number
function countDigits(num) {
  num = num < 0 ? -num : num;
  let count = 0;

  if (num == 0) return 1;

  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}

// check if a number is prime or not
function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i * i <= num; i++) {
    if (num % i == 0) return false;
  }

  return true;
}

// check if a number is palindrome or not
function isPalindrome(num) {
  let n = num;
  let reversed = 0;

  while (n) {
    reversed = 10 * reversed + (n % 10);
    n = Math.floor(n / 10);
  }

  return reversed === num;
}

// count trailing zeros in factorial of a number
function countZeros(num) {
  let count = 0;
  let temp = 5;

  while (temp < num) {
    count += Math.floor(num / temp);
    temp *= 5;
  }

  return count;
}
