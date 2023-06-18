let stringName = "Waliyah";
console.log(stringName.lastIndexOf("a"));
console.log(stringName.toLowerCase());
console.log(stringName.toUpperCase());
console.log(stringName.replace("liyah", "hala"));
console.log(stringName);
console.log(stringName.slice(2, 5));

let word = "JavaScript";
console.log(word.slice(4).toUpperCase().indexOf("R"));

let language = "JavaScript";
language.replace("J", "Q");
language.slice(0, 5);
console.log(language);

console.log(language.slice(1, 6));

let org = "  The LaunchCode Foundation ";
let trimmed = org.trim();

console.log(trimmed);

console.log('"The dog\'s favorite toy is a stuffed hedgehog," said Chris');
console.log("Launch", "Code");

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
