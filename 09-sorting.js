function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let swap = false;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
        swap = true;
      }
    }

    if (!swap) break;
    [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
  }
}

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let key = arr[i];

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
}

function mergeSort(arr, l, r) {
  if (r > l) {
    let mid = l + Math.floor((r - l) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    merge(arr, l, mid, r);
  }
}

function merge(arr, low, mid, height) {
  const arr1 = arr.slice(low, mid + 1);
  const arr2 = arr.slice(mid + 1, height + 1);
  let i = 0;
  let j = 0;

  while (low <= height) {
    if (!arr2[j] || arr1[i] <= arr2[j]) {
      arr[low] = arr1[i];
      i++;
    } else if (!arr1[i] || arr1[i] > arr2[j]) {
      arr[low] = arr2[j];
      j++;
    }

    low++;
  }
}

// merge Two Sorted Array
function mergeTwoSortedArrays(arr1, arr2) {
  const res = Array(arr1.length + arr2.length);

  let k = 0;
  let j = 0;
  for (let i = 0; i < res.length; i++) {
    if (!arr2[k] || arr1[j] <= arr2[k]) {
      res[i] = arr1[j];
      j++;
    } else if (!arr1[j] || arr1[j] > arr2[k]) {
      res[i] = arr2[k];
      k++;
    }
  }

  return res;
}

// intersection of two sorted array
function intersectionOfTwoSortedArray(arr1, arr2) {
  const res = [];

  let k = 0;
  let j = 0;
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (!arr2[k] || arr1[j] < arr2[k] || arr1[j] == res[res.length - 1]) {
      j++;
    } else if (
      !arr1[j] ||
      arr1[j] > arr2[k] ||
      arr2[k] == res[res.length - 1]
    ) {
      k++;
    } else if (arr2[k] && arr1[j] && arr1[j] == arr2[k]) {
      res.push(arr1[j]);
      j++;
      k++;
    }
  }
  return res;
}

// union of two sorted array
function unionOfTwoSortedArrays(arr1, arr2) {
  const res = [];

  let k = 0;
  let j = 0;
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (!arr2[k] || arr1[j] <= arr2[k]) {
      if (arr1[j] != res[res.length - 1]) res.push(arr1[j]);
      j++;
    } else if (!arr1[j] || arr1[j] > arr2[k]) {
      if (arr2[k] != res[res.length - 1]) res.push(arr2[k]);
      k++;
    }
  }
  return res;
}

console.log(unionOfTwoSortedArrays([2, 3, 3, 3, 4, 4], [4, 4]));
