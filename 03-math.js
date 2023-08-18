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
