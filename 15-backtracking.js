// string permutation
function swap(str, i, j) {
  const strArray = str.split("");
  const temp = strArray[i];
  strArray[i] = strArray[j];
  strArray[j] = temp;
  return strArray.join("");
}

function permuteStr(str, start = 0, res = []) {
  if (start >= str.length - 1) {
    res.push(str);
    return res;
  }

  for (let i = start; i < str.length; i++) {
    str = swap(str, start, i);
    permuteStr(str, start + 1, res);
    str = swap(str, start, i);
  }

  return res;
}

// =======================================
// Maximum Length of a Concatenated String with Unique Characters
function isUnique(str) {
  const set = new Set(str);
  return set.size === str.length;
}

function maxLength(arr, idx = 0, max = 0, str = "") {
  if (idx >= arr.length) return max;

  for (let i = idx; i < arr.length; i++) {
    const temp = str;
    str += arr[i];
    if (isUnique(str)) {
      max = Math.max(max, str.length);
      max = maxLength(arr, i + 1, max, str);
    }
    str = temp;
  }

  return max;
}

const strings = ["un", "iq", "ue"];
console.log(maxLength(strings));
