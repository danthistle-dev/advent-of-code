// DAY 3: Rucksack Reorganization

const { readInput } = require("../file-read.js");

const input = readInput("input.txt");

function getCompartments(rucksack) {
  const mid = Math.floor(rucksack.length / 2);
  return [rucksack.slice(0, mid), rucksack.slice(mid)];
}

function findWrongItem(compartments) {
  const [left, right] = compartments;
  return Array.from(left).find((item) => Array.from(right).includes(item));
}

function getItemPriority(item) {
  const priorities = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return priorities.indexOf(item) + 1;
}

function findCommonItem(rucksacks) {
  return Array.from(rucksacks[0]).find((item) => {
    return (
      Array.from(rucksacks[1]).includes(item) &&
      Array.from(rucksacks[2]).includes(item)
    );
  });
}

const compartments = input.map(getCompartments);
const wrongItems = compartments.map(findWrongItem);
const itemPriorities = wrongItems.map(getItemPriority);
const total = itemPriorities.reduce((acc, priority) => acc + priority, 0);

console.log("Part one answer: ", total);

const elfGroups = (function (rucksacks) {
  const groups = [];
  groupSize = 3;

  for (let i = 0; i < rucksacks.length; i += groupSize) {
    groups.push(rucksacks.slice(i, i + groupSize));
  }

  return groups;
})(input);

const groupBadges = elfGroups.map(findCommonItem);
const badgePriorities = groupBadges.map(getItemPriority);
const badgeTotal = badgePriorities.reduce((acc, priority) => acc + priority, 0);

console.log("Part two answer: ", badgeTotal);
