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

function hollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    process.stdout.write("\n");
  }
}

function printReverseTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let s = 1; s <= n - i; s++) {
      process.stdout.write(" ");
    }

    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }

    console.log();
  }
}

function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let s = 1; s <= n - i; s++) {
      process.stdout.write(" ");
    }

    for (let j = 1; j < 2 * i; j++) {
      process.stdout.write("*");
    }

    console.log();
  }
}
