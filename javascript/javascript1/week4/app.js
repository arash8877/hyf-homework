// Fibonacci Sequence  
let fib = [0, 1];

function makeFibonacci(n) {                  
  for (i = 2; i < n; i++) {
    fib[i] = fib[i - 2] + fib[i - 1];
    fib.push(fib[i]);
  }
}

makeFibonacci(10);             // Question?
console.log(fib.toString());   // I am wondering why the last number is repeated?!!


// Fizz buzz
let numbers = [];

function fizzBuzz(n, m) {
  for (i = 1; i <= 100; i++) {
    if (i % n === 0 && i % m !== 0) {
      numbers.push(" Fizz ");
    } else if (i % m === 0 && i % n !== 0) {
      numbers.push(" Buzz ");
    } else if (i % n === 0 && i % m === 0) {
      numbers.push(" FizzBuzz ");
    } else {
      numbers.push(i);
    }
  }
}
fizzBuzz(3, 5);

console.log(numbers.toString());


// Build a sentiment analyzer
function checkSentence() {
  let sentence = "I am boring and angry and sad but nice";
  positive = ["happy", "supper", "nice"];
  negative = ["sad", "boring", "angry"];

  let newSentence = sentence.split(" ");

  let positiveWords = [];
  let negativeWords = [];
  let score = 0;

  for (item of newSentence) {
    if (positive.includes(item)) {
      positiveWords.push(item);
      score++;
    } else if (negative.includes(item)) {
      negativeWords.push(item);
      score--;
    }
  }

  let result = {
    score,
    positiveWords,
    negativeWords,
  };

  console.log(result);
}

checkSentence();

// Credit card number formatter 
function formatCardNumber (cardNumber) {
  const strNumber = cardNumber.toString();
  const results = strNumber.match(/\d{4}/g);
  const formattedNumber = results.join(" ");
  console.log(formattedNumber)
}
formatCardNumber(1234123412341324)


// Character frequencies  
function countFrequency() {
  const string = "happy";

  let freq = {};

  for (i = 0; i < string.length; i++) {
    let character = string.charAt(i);

    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }
  console.log(freq);
}

countFrequency();

let counter = (str) => {
  return str.split("").reduce((total, letter) => {
    total[letter] ? total[letter]++ : (total[letter] = 1);
    return total;
  }, {});
};

counter("aabsssd");


// Credit Card Type
function getCardType(number) {
  const re = {
    electron: /^(4026|417500|4405|4508|4844|4913|4917)\d+$/,
    maestro:
      /^(5018|5020|5038|5612|5893|6304|6759|6761|6762|6763|0604|6390)\d+$/,
    dankort: /^(5019)\d+$/,
    interpayment: /^(636)\d+$/,
    unionpay: /^(62|88)\d+$/,
    visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
    mastercard:
      /^(5[1-5][0-9]{14}|2(22[1-9][0-9]{12}|2[3-9][0-9]{13}|[3-6][0-9]{14}|7[0-1][0-9]{13}|720[0-9]{12}))$/,
    amex: /^3[47][0-9]{13}$/,
    diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}$/,
  };

  for (let key in re) {
    if (re[key].test(number)) {  // method "test()": for a given pattern, check a string or number that matches the pattern
      return key;
    }
  }
  return "unknown";
}
console.log(getCardType(4571000000000));


// Return the number of vowels
function findVowels() {
  const string = "hi baby! how is going?";
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  const arrString = string.split("");
  for (item of arrString) {
    if (vowels.includes(item)) {
      count++;
    }
  }
  console.log(count);
}
findVowels();


// square every digit
function getSquare(number) {
  const numberArr = Array.from(String(number), Number);
  let squareArr = [];

  for (item of numberArr) {            //I have converted the number to an array to loop though it.                                 
    squareArr.push(item * item);      // is there a better way to loop through a number directly?
  }

  return Number(squareArr.join(""));
}

console.log(getSquare(9119));


// find highest and lowest number
function highestAndLowest(numbers) {
  arrNumbers = numbers.split(" ");
  const result =
    Math.max.apply(null, arrNumbers) + " " + Math.min.apply(null, arrNumbers);
  console.log(result);
}

highestAndLowest("1 2 5 19 0 -2");


// Voice assistant
let personName = "";
let todo = [];

function getReply(command) {
  let response;

  switch (command) {
    case "Hello my name is Benjamin":
      personName = command.substr(17);
      response = `nice to meet you ${personName}`;
      break;
    case "What is my name":
      response = `Your name is ${personName}`;
      break;
    case "Add fishing to my todo":
      const task1 = command.slice(4, 11);
      todo.push(task1);
      response = `${task1} added to your todo`;
      break;
    case "Add singing in the shower to my todo":
      const task2 = command.slice(4, 25);
      todo.push(task2);
      response = `${task2} added to your todo`;
      break;
    case "Remove fishing from my todo":
      const remove = command.slice(7, 14);
      const index = todo.indexOf("fishing");
      todo.splice(index, 1);
      response = `${remove} removed from your todo`;
      break;
    case "What is on my todo?":
      response = `${todo.toString()} is in your list`;
      break;
    case "What day is it today?":
      const today = new Date();
      const format = { year: "numeric", month: "long", day: "numeric" };
      response = today.toLocaleDateString("en-GB", format);
      break;
    case "what is 6 + 3":
      const equation = command.slice(8);
      response = `${equation} is equal to ${eval(equation)}`;
      break;
    case "Set a timer for 2 minutes":
      const time = command.slice(16, 17);
      const timeInMinute = time * 60000;
      response = `Timer set to ${time} minutes`;
      setTimeout(function () {
        console.log("Timer done");
      }, timeInMinute);
      break;
    default:
      response = "Sorry, cannot help you.";
  }

  if (response) {
    console.log(response);
  }
}

getReply("Hello my name is Benjamin");
getReply("What is my name");
getReply("Add fishing to my todo");
getReply("Add singing in the shower to my todo");
getReply("Remove fishing from my todo");
getReply("What is on my todo?");
getReply("What day is it today?");
getReply("what is 6 + 3");
getReply("Set a timer for 2 minutes");





