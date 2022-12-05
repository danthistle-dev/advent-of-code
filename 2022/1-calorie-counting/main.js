// DAY 1: Calorie Counting

var fs = require("fs");

let calories;

try {
  var data = fs.readFileSync("input.txt", "utf8");
  calories = data.split("\n").map(Number);
} catch (e) {
  console.log("Error:", e.stack);
}

function groupCalories(calories) {
  if (!calories) return null;
  const groups = [];
  let currentGroupEndIndex = 0;

  calories.forEach((calorie, index) => {
    if (calorie === 0) {
      groups.push(calories.slice(currentGroupEndIndex, index));
      currentGroupEndIndex = index + 1;
    }
  });

  return groups;
}

function sumCalories(calories) {
  return calories.reduce((acc, calorie) => acc + calorie, 0);
}

const groups = groupCalories(calories);
const totalCalories = groups.map(sumCalories);
const orderedCalories = totalCalories.sort((a, b) => b - a);

console.log("Part one answer: ", orderedCalories[0]);

console.log(
  "Part two answer: ",
  orderedCalories[0] + orderedCalories[1] + orderedCalories[2]
);
