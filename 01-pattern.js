function printTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

function printDiamond(n) {
  for (let row = 1; row <= n; row++) {
    for (let s = 1; s <= n - row; s++) {
      process.stdout.write(" ");
    }

    for (let col = 1; col < 2 * row; col++) {
      process.stdout.write("*");
    }

    console.log();
  }

  for (let row = n - 1; row > 0; row--) {
    for (let s = 1; s <= n - row; s++) {
      process.stdout.write(" ");
    }

    for (let col = 1; col < 2 * row; col++) {
      process.stdout.write("*");
    }

    console.log();
  }
}
