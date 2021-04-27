// #### Lycanthrope's Log Example ####

let journal = [];

const addEntry = (events, squirrel) => {
  journal.push({ events, squirrel });
}

// addEntry(["Work", "touched tree", "pizza", "running", "television"], false);

// #### The Sum of Range ####

const sum = (arr) => {
  let total = 0;
  for (const number of arr) {
    total += number;
  }
  return total;
}


const range = (start, end, step = start < end ? 1 : -1) => {
  let arr = []
  
  if (step > 0) {
    for (let i = start; i <= end; i += step) arr.push(i);
  } else {
    for (let i = start; i >= end; i += step) arr.push(i);
  }

  return arr;
}

// #### Reversing an Array ####

// Time - O(N) | Space - O(N)
const reverseArray = (array) => {
  let newArr = [];

  for (let i = array.length - 1; i >= 0; i--) newArr.push(array[i])
  
  return newArr;
}

// Time - O(N) | Space N(1)

const reverseArrayInPlace = (array) => {
  let temp;
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}

// console.log(reverseArrayInPlace(['A', 'B', 'C', 'D', 'E']))

// #### List ####

// ArrayToList | Time - O(N) | Space - O(N)

const arrayToList = (array) => {
  let list = null;

  for (let i = array.length - 1; i >= 0; i--) {
    list = {
      value: array[i],
      rest: list,
    };
  }
  return list;
}

// ListToArray | Time - O(N) | Space - O(N)

const listToArray = (list) => {
  let array = [];

  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

// Prepend | Time - N(1) | Space - N(1)

const prepend = (value, list) => {
  return { value, rest: list };
};

// nth

const nth = (list, n) => {
  if (!list) return undefined;
  else if (n === 0) return list.value;
  else return nth(list.rest, n - 1);
}

// deepEqual

const deepEqual = (a, b) => {
  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (a === b) return true;

  if (a === null || typeof a !== "object" || b === null || typeof b !== "object") return false;

  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }
  return true;
}