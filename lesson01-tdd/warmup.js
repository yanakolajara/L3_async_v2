// 1. Given an integer, n,  between 3 and 100, return a line with n '*' characters
const lineOfStars = (n) => {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += '*';
  }
  return result;
};

// 5 => '*****'
// 12 => '************'
// 3 => "***"

// 2. Given an integer, n, between 3 and 100,
// return a line n characters long where the first and last character are '*' and all the middle characters are a space.
const spaceBetweenStars = (n) => {
  let result = '';
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      result += '*';
    } else {
      result += ' ';
    }
  }
  return result;
};
// 5 => '*   *'
// 12 => '*          *'

// 3. Given two integers, n and m, create n lines of m characters. The first and last line should be made of all '*' and all the middle lines should start and end with '*' and have all spaces in the middle
const createZeroWithChar = (n, m) => {
  let result = '';
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === n - 1) {
      result += lineOfStars(m) + '\n';
    } else {
      result += spaceBetweenStars(m) + '\n';
    }
  }
  return result;
};
// 5,5 => *****
//        *   *
//        *   *
//        *   *
//        *****

// Console.log the result of each of the above functions to test them. Run your file with node warmup.js and check the terminal for the correct output.
console.log(lineOfStars(5));
console.log(lineOfStars(12));
console.log(lineOfStars(3));

console.log(spaceBetweenStars(5));
console.log(spaceBetweenStars(12));

console.log(createZeroWithChar(5, 5));
