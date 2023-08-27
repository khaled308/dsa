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

const nums = [6, 9, 2, 3, 0, 4];
insertionSort(nums);
console.log(nums);
