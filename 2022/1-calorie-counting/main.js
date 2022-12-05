// DAY 1: Calorie Counting

var fs = require("fs");

let calories;

try {
  var data = fs.readFileSync("1-input.txt", "utf8");
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

console.log(groupCalories(calories));
