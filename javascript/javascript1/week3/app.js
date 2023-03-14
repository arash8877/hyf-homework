// Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
names.splice(1, 1);

console.log(names);


// When will we be there??
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

function travelTime() {
  const time =
    (travelInformation.destinationDistance / travelInformation.speed) * 60;
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time % 60);
  return `${hours} hours and ${minutes} minutes`;
}
console.log(travelTime());


// Series duration of my life
const seriesDurations = [
  {
    title: "Lost",
    days: 9,
    hours: 3,
    minutes: 0,
  },
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
];

let totalTime = [];

function timeOfLife() {
  for (let item of seriesDurations) {
    const MovieName = item.title;
    const daysToYear = item.days / 365;
    const hoursToYear = item.hours / 8766;
    const minutesToYear = item.minutes / 525600;
    const movieTime = (
      (daysToYear + hoursToYear + minutesToYear) *
      1.25
    ).toFixed(4);
    const newMovieTime = (daysToYear + hoursToYear + minutesToYear) * 1.25;
    console.log(`${MovieName} took ${movieTime}% of my life`);
    totalTime.push(newMovieTime);
  }
}

timeOfLife();

const initialValue = 0;
const totalTimeSpent = totalTime.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(`In total that is ${totalTimeSpent.toFixed(4)}% of my life`);


//NOnoN0nOYes (Note taking app)
let notes = [];

function saveNote(content, id) {
  notes.push({
    content,
    id,
  });
}
saveNote("This is the 1. note", 1);
saveNote("This is the 2. note", 2);
saveNote("This is the 3. note", 3);

console.log(notes);

function getNote(id) {
  notes.map((item) => {
    if (item.id === id) {
      console.log(item);
    } else {
      console.log("Oops! No match note found.");
    }
  });
}
getNote(6);

function logOutNotesFormatted() {
  for (let item of notes) {
    console.log(
      `The note with id: ${item.id}, has the following note text: ${item.content}`
    );
  }
}
logOutNotesFormatted();

function logOutNotesFormatted() {
  for (let item of notes) {
    console.log(`${item.id}- ${item.content}`);
  }
}

logOutNotesFormatted();

// Smart phone usage app
const activities = [];
const currentDate = new Date().toJSON().slice(0, 10);

function addActivity(date, activity, duration) {
  activities.push({
    date,
    activity,
    duration,
  });
}
addActivity(currentDate, "instagram", 20);
addActivity(currentDate, "facebook", 55);
addActivity(currentDate, "youtube", 20);
addActivity("2023-03-12", "TikTok", 10);
addActivity("2023-03-12", "Telegram", 25);
console.log(activities);

let sum = 0;
const limitTime = 150;

function showStatus() {
  const numberOfActivities = activities.length;
  activities.map((item) => (sum += item.duration));
  return `You have added ${numberOfActivities} activities. They amount to ${sum} min. of usage.`;
}
console.log(showStatus());

if (sum >= limitTime) {
  console.log("You have reached your limit, no more smartphoning for you!");
}

function statusSpecificDate(date) {
  return activities.filter((item) => item.date === date);
}
console.log(statusSpecificDate("2023-03-12"));


const durationValues = activities.map((item) => {
  return item.duration;
});
const maxDuration = Math.max(...durationValues);
const mostTimeSpent = activities.find((item) => item.duration === maxDuration);

console.log(`The activity you have spent most time on is: ${mostTimeSpent.activity}`);
