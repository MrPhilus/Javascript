let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  agr: 6,
};

let salamander = {
  name: "Lacey",
  species: "Axolotl salamander",
  mass: 0.1,
  age: 5,
};

let superChimpTwo = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  agr: 6,
};

let beagleOne = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  agr: 5,
};

let tardigradeOne = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  agr: 1,
};

superChimpOne.astronautID = Math.round(Math.random() * 10);
salamander.astronautID = Math.round(Math.random() * 10);
superChimpTwo.astronautID = Math.round(Math.random() * 10);
beagleOne.astronautID = Math.round(Math.random() * 10);
tardigradeOne.astronautID = Math.round(Math.random() * 10);
// console.log(superChimpOne.astronautID);
// console.log(salamander.astronautID);
// console.log(superChimpTwo.astronautID);
// console.log(beagleOne.astronautID);
// console.log(tardigradeOne.astronautID);

superChimpOne.move = function () {
  let steps = Math.floor(Math.random() * 11);
  return steps;
};
salamander.move = function () {
  let steps = Math.floor(Math.random() * 11);
  return steps;
};
superChimpTwo.move = function () {
  let steps = Math.floor(Math.random() * 11);
  return steps;
};
beagleOne.move = function () {
  let steps = Math.floor(Math.random() * 11);
  return steps;
};
tardigradeOne.move = function () {
  let steps = Math.floor(Math.random() * 11);
  return steps;
};

let astroAnimals = [
  superChimpOne,
  salamander,
  superChimpTwo,
  beagleOne,
  tardigradeOne,
];

function crewReports(animal) {
  return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}
console.log(
  crewReports(astroAnimals[Math.round(Math.random() * astroAnimals.length)])
);

function fitnessTest(arr) {
  let numSteps = [];
  for (let i = 0; i < arr.length; i++) {
    let steps = 0;
    let result = "";
    let moves = 0;
    while (steps < 20) {
      steps = steps + arr[i].move();
      moves = moves + 1;
      result = `${arr[i].name} took ${moves} turns to take 20 steps.`;
    }
    numSteps.push(result);
  }
  return numSteps;
}
console.log(fitnessTest(astroAnimals));
