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
