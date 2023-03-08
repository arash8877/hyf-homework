//Flight booking fullname function
function getFullName(
  firstname = "Not provided",
  surname = "Not provided",
  useFormalName,
  male
) {
  if (useFormalName) {
    male
      ? console.log(`Lord ${firstname} ${surname}`)
      : console.log(`Mis ${firstname} ${surname}`);
  } else {
    console.log(`${firstname} ${surname}`);
  }
}
const fullname1 = getFullName("Jan", "Jayson", true, true);
const fullname2 = getFullName("Peter", "Petersen", false);
const fullname3 = getFullName("Alex", "Ferguson"); // if useFormalName is not given, consider it as false.
const fullname4 = getFullName("Maria", "Andersen", true, false);
const fullname5 = getFullName("", "", true, false); // if there is empty string, no firstname and surenam is typed.


//vent application
function getEventWeekday(dayNumber) {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const dayOfWeek = new Date().getDay();
  const eventIndex = (dayOfWeek + dayNumber) % 7;

  if (eventIndex === 0) {
    console.log(`The day of the event is: Sunday`);
  } else {
    console.log(`The day of the event is: ${weekDays[eventIndex - 1]}`);
  }
}
getEventWeekday(15);


// Weather wear
function clothesToWear(temperature) {
  if (temperature <= 0) {
    return console.log("You should wear a puffy jacket");
  } else if (temperature <= 10) {
    return console.log("You should wear a parka jacket");
  } else if (temperature <= 20) {
    return console.log("You should wear a windbreaker jacket");
  } else if (temperature > 20 && temperature <= 30) {
    return console.log("You should wear a shirt");
  } else {
    return console.log("You should wear a T-shirt");
  }
}
clothesToWear(33);


//Student manager
const class07Students = [];

function addStudentToClass(studentName) {
  if (class07Students.length < 6 || studentName === "Queen") {
    if (class07Students.includes(studentName)) {
      console.log(`Student ${studentName} is already in the class`);
    } else {
      class07Students.push(studentName);
      console.log(class07Students);
    }
  } else {
    console.log("Cannot add more students to class 07");
  }
}

addStudentToClass("Peter");
addStudentToClass("Alex");
addStudentToClass("Jack");
addStudentToClass("Jim");
addStudentToClass("Jim");
addStudentToClass("Anne");
addStudentToClass("Morgan");
addStudentToClass("Andrea");
addStudentToClass("Queen");
addStudentToClass("Tiffany");
addStudentToClass("Queen");

function getNumberOfStudents() {
  const numberOfStudents = class07Students.push();
  console.log(`There are ${numberOfStudents} student in the class`);
}

getNumberOfStudents();



// Candy helper optional
const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  switch (candyType) {
    case "Sweet":
      price = weight * 0.5;
      boughtCandyPrices.push(price), console.log(boughtCandyPrices);
      break;
    case "Chocolate":
      price = weight * 0.7;
      boughtCandyPrices.push(price), console.log(boughtCandyPrices);
      break;
    case "Toffee":
      price = weight * 1.1;
      boughtCandyPrices.push(price), console.log(boughtCandyPrices);
      break;
    case "Chewing-gum":
      price = weight * 0.03;
      boughtCandyPrices.push(price), console.log(boughtCandyPrices);
      break;
    default:
      console.log(`Sorry, you cannot buy ${candyType}`);
  }
}

addCandy("Sweet", 10);
addCandy("Chocolate", 20);
addCandy("Toffee", 10);
addCandy("Chewing-gum", 100);
addCandy("fruit", 100);
addCandy("Sweet", 10);

const amountToSpend = Math.round(Math.random() * 100);
let totalSpent = 0;

function canBuyMoreCandy() {
  for (i = 0; i < boughtCandyPrices.length; i++) {
    totalSpent += boughtCandyPrices[i];
  }
  console.log(`Amount to spend: ${amountToSpend}`);
  console.log(`You have spent: ${totalSpent}`);
  if (amountToSpend <= totalSpent) {
    console.log("Enough candy for you!");
  } else {
    console.log("You can buy more, so please do!");
  }
}
canBuyMoreCandy();
