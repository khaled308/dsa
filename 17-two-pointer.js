// pair of elements in sorted array whose sum is equal to given number
function getPair(arr, target) {
  let l = 0;
  let r = arr.length - 1;

  while (l < r) {
    const temp = arr[l] + arr[r];

    if (temp === target) return [arr[l], arr[r]];
    else if (temp > target) r--;
    else l++;
  }

  return null;
}

console.log(getPair([1, 2, 3, 4, 5, 6, 7, 8, 9], 10));
console.log(getPair([1, 2, 3, 4, 5, 6, 7, 8, 9], 14));
console.log(getPair([1, 2, 3, 4, 5, 6, 7, 8, 9], 16));
