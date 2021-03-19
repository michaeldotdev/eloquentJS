// #### Looping a Triangle ####
let hash = '';
for (let i = 0; i < 7; i++) {
  hash = hash + '#';
  console.log(hash);
}

// #### FizzBuzz ####
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i)
  }
}

// #### Chessboard ####

let size = 8;
let board = '';

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board)