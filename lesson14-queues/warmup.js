// Prompt 1: Pulling penguins from the front
const pullPenguins = (penguins, count) => {
  // TODO: Implement the logic to pull 'count' number of penguins from the front of the line
};

// Prompt 2: Removing the last penguin
const removeLastPenguin = (penguins) => {
  // TODO: Implement the logic to remove the last penguin from the line
};

// Prompt 3: Counting the penguins
const countPenguins = (penguins) => {
  // TODO: Implement the logic to count the number of penguins in the line
};

// Example usage
const penguins = [
  "Penguin 1",
  "Penguin 2",
  "Penguin 3",
  "Penguin 4",
  "Penguin 5",
];

const pulledPenguins = pullPenguins(penguins, 3);
console.log("Pulled penguins:", pulledPenguins);

removeLastPenguin(penguins);
console.log("Updated penguins:", penguins);

const penguinCount = countPenguins(penguins);
console.log("Total penguins:", penguinCount);
