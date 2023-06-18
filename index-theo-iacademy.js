//String and Array manipulation
let stringName = "Waliyah";
console.log(stringName.lastIndexOf('a'));
console.log(stringName.toLowerCase());
console.log(stringName.toUpperCase());
console.log(stringName.replace("liyah","hala"));
console.log(stringName);
console.log(stringName.slice(2,5));

let word = "JavaScript";
console.log(word.slice(4).toUpperCase().indexOf('R'));

let language = "JavaScript";
language.replace('J', 'Q');
language.slice(0,5);
console.log(language);

console.log(language.slice(1,6));

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

console.log("\"The dog's favorite toy is a stuffed hedgehog,\" said Chris");
console.log('Launch', 'Code');

let pluralNoun = "pigs";
let name = "Frank";
let verb = "chew";
let adjective = "ridiculous";
let color = "grey";

console.log(
  `JavaScript provides a ${color} collection of tools — including ${adjective} syntax and ${pluralNoun} — that allows ${name} to ${verb} with strings.`
);

let frameWorks = ["React", "Angular", "Vue"];
console.log(frameWorks.includes("react"));

console.log(frameWorks.reverse());
console.log(frameWorks.sort());
console.log(frameWorks.pop());
console.log(frameWorks);
console.log(frameWorks.push("Ember", "Vue"));
console.log(frameWorks);
console.log(frameWorks.shift());
console.log(frameWorks);
console.log(frameWorks.unshift("Angular"));
console.log(frameWorks);
console.log(frameWorks.splice(1, 0, "Tailwind", "Dotnet"));
console.log(frameWorks);

let groBag = [
  "bananas",
  "apples",
  "edamame",
  "chips",
  "cucumber",
  "milk",
  "cheese",
];
let selectedItems = [];

selectedItems = groBag.slice(2, 5).sort();
console.log(selectedItems);

let num = 1.45;
let stringNum = String(num);
// console.log(stringNum);
// console.log(stringNum.replace(".", "").length);

if (stringNum.includes(".")) {
  num = stringNum.replace(".", "");
  console.log(num);
} else {
  console.log(stringNum);
}

let dna = " TCG-TAC-gaC-TAC-CGT-CAG-ACT-TAa-CcA-GTC-cAt-AGA-GCT    ";
dna = dna.trim().toUpperCase().replace("GCT", "AGG");

if (dna.indexOf("CAT" !== -1)) {
  console.log("CAT found");
} else {
  console.log("CAT NOT found");
}

// let dnaArray = dna.split("-")[4];
// console.log(dnaArray);

let dnaArray = dna.split("-").slice(4, 5);
console.log(dnaArray[0]);

console.log(`The DNA strand is ${dna.length} characters long.`);

let word = "JavaScript";
console.log(word);

let abv1 = word.slice(0, 1);
console.log(abv1);
let abv2 = word.slice(4, 5);
console.log(abv2);
let fullAbv = abv1 + abv2;
console.log(fullAbv);

let wordAbv = word.replace("ava", "").replace("cript", "");
console.log(wordAbv);

console.log(`The abbreviation for ${word} is ${wordAbv}.`);

console.log(word.toUpperCase().replace("JAVA", "TYPE").indexOf("E"));

let newWord = "title case";
newWord = newWord
  .replace(newWord[0], newWord[0].toUpperCase())
  .replace(newWord[6], newWord[6].toUpperCase());
newWord = newWord.replace("t", "T").replace("c", "C");
console.log(newWord);

let nameFamily = ["Keren", "Theophilus", "Michael"];
for (let i = 0; i < nameFamily.length; i++) {
  console.log(nameFamily[i]);
}
let numbers = [11, 23, 42, 67, 99, 124];
let searchVal = 42;
let i = 0;

while (i < numbers.length) {
  if (numbers[i] === searchVal) {
    break;
  }
  i++;
}

if (i < numbers.length) {
  console.log("The value", searchVal, "was located at index", i);
} else {
  console.log("The value", searchVal, "is not in the array.");
}

// For Loops
// 1a
for (let i = 0; i < 21; i++) {
  console.log(i);
}

// b
for (let i = 3; i < 30; i += 2) {
  console.log(i);
}

// c
for (let i = 12; i > -15; i -= 2) {
  console.log(i);
}

// d
for (let i = 50; i > 20; i--) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

// 2a
let myWord = "LaunchCode",
  myArray = [1, 5, "LC101", "blue", 42],
  reversed = "";

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// b
for (let i = 0; i < myWord.length; i++) {
  reversed = myWord[i] + reversed;
}
console.log(reversed);

// 3a
let thisArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104],
  evenArray = [],
  oddArray = [];

// b
for (let i = 0; i < thisArray.length; i++) {
  if (thisArray[i] % 2 == 0) {
    evenArray.push(thisArray[i]);
  } else {
    oddArray.push(thisArray[i]);
  }
}

// c
console.log(evenArray);
console.log(oddArray);
// evenArray = thisArray.filter((num) => num % 2 === 0);
// console.log(evenArray);

// While Loops
// 4a
let fuelLevel = 0,
  numAstronauts = 0,
  shuttleAltitude = 0;
while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
  fuelLevel = prompt("Enter the Starting Fuel Level:");
}
while (numAstronauts < 1 || numAstronauts > 7 || isNaN(numAstronauts)) {
  numAstronauts = prompt("Enter the number of astronauts:");
}
while (fuelLevel - 100 * numAstronauts >= 0) {
  shuttleAltitude += 50;
  fuelLevel -= 100 * numAstronauts;
}
console.log(fuelLevel);
console.log(shuttleAltitude);

let output = `The shuttle gained an altitude of ${shuttleAltitude} km.`;

if (shuttleAltitude >= 2000) {
  output += " Orbit achieved!";
} else {
  output += "Failed to reach orbit.";
}
window.alert(output);
