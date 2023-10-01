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
  print1ToN(n - 1);
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
