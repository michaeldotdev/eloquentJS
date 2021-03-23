// #### Hummus example ####

const hummus = function(factor) {
  const ingredients = function (amount, unit, name) {
    let ingredientAmount = amount * factor;
    if (ingredientAmount > 1) {
      unit += "s";
    }
    console.log(`${ingredientAmount} ${unit} ${name}`);
  };
  ingredients(1, "can", "chickpeas");
  ingredients(0.25, "cup", "chickpeas");
  ingredients(0.25, "cup", "chickpeas");
  ingredients(1, "clove", "garlic");
  ingredients(2, "tablespoon", "olive oil");
  ingredients(0.5, "teaspoon", "cumin");
};

//console.log(hummus(2))

// #### Closure Example ####

function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
// the function number => number * 2 is now bound to twice.
//console.log(twice(5))
// when you call twice here, the result is 5 => 5 * 2 = 10 which returns 10 (implicit return)

// #### Minimum ####

const min = (a, b) => {
  return Math.min(a, b);
}

//console.log(min(5, 99))

// #### Recursion #### 

const isEven = (n) => {
  n = Math.abs(n)
  if (n === 0) return true;
  else if (n === 1) return false;
  else return isEven(n - 2)
}

//console.log(isEven(-1))

// #### Bean Counting ####

const countBs = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "B") count++;
  }
  return count;
}

const countChar = (str, char) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const element = str[i];
    
    if (element === char) count++;
  }
  return count;
}

//console.log(countChar("kakkerlak", "k"))