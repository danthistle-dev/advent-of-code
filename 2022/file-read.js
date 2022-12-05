const fs = require("fs");

function readInput(file) {
  try {
    const input = fs.readFileSync(file, "utf8");
    return input.split("\n");
  } catch (e) {
    console.log("Error:", e.stack);
    return null;
  }
}

module.exports = { readInput };
