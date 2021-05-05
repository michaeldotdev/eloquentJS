// #### Flattening Array with reduce & concat ####

// Time -  O(N2) | Space - O(N)

let array = [[1, 2, 3], [4, 5], [6]];

// console.log(array.reduce((flat, current) => flat.concat(current), []));

// #### Loop ####


const loop = (start, condition, update, body) => {
  for (let num = start; condition(num); num = update(num)) {
    body(num);
  }
}

// loop(3, num => num > 0, num => num - 1, console.log);


// #### Every ####

const every = (array, test) => {
  for (const element of array) {
    if (!(test(element))) return false;
  }
  return true;
}

// #### Every with some ####
const every2 = (array, test) => {
  return !array.some(element => !test(element));
}