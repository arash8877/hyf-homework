// my user-name in freeCodeCamp.com is "arash8877".

// Age-ify
const yearOfBirth = 1979;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}.`);

// Goodboy-Oldboy
const dogYearOfBirth = 2020;
const dogYearFuture = 2045;
const dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(
    `Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`
  );
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`
  );
}

// Housey pricey
const wide = 5;
const deep = 11;
const high = 8;
const gardenSizeInM2 = 70;

const volumeInMeters = wide * deep * high;
const housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;

const paidPrice = 2500000;

if (paidPrice > housePrice) {
  console.log("You are paying too much.");
} else if (paidPrice < housePrice) {
  console.log("You are paying too little");
} else {
  console.log("The price is right.");
}

// Ez Namey
const firstWords = [
    "Easy",
    "Nice",
    "Awesome",
    "Great",
    "Popular",
    "Large",
    "Smart",
    "Cool",
    "City",
    "Best"
  ];
  const secondWords = [
    "Corporation",
    "Collaboration",
    "Factory",
    "Solution",
    "Evolution",
    "Innovation",
    "Circle",
    "FFC",
    "COC",
    "PPN"
  ];
  const randomNumber = Math.floor(Math.random() * 10);
  let startupName = `${firstWords[randomNumber]} ${secondWords[randomNumber]}`;
  console.log(`Suggested name for the startup: ${startupName}`);
  