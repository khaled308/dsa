// matrix row sum
function matrixRowSum(m) {
  const res = [];

  for (let i = 0; i < m.length; i++) {
    let sum = 0;
    for (let j = 0; j < m[i].length; j++) {
      sum += m[i][j];
    }
    res.push(sum);
  }
  return res;
}

// matrix col sum
function matrixColSum(m) {
  const res = [];

  for (let i = 0; i < m.length; i++) {
    let sum = 0;
    for (let j = 0; j < m.length; j++) {
      sum += m[j][i];
    }
    res.push(sum);
  }
  return res;
}

// rotate matrix by 90
function rotateMatrixBy90(m) {
  for (let i = 0; i < m.length; i++) {
    // transpose
    for (let j = i + 1; j < m.length; j++) {
      [m[i][j], m[j][i]] = [m[j][i], m[i][j]];
    }

    // reverse row
    for (let j = 0; j < m.length / 2; j++) {
      const temp = m[i][j];
      const index = m.length - 1 - j;
      m[i][j] = m[i][index];
      m[i][index] = temp;
    }
  }
}
