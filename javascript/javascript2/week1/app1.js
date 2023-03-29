// Find and count the Danish letters
function findDanishLetter() {
  const danishString = "Blå grød med røde bær og røde bær";
  const danishLetters = ["å", "æ", "ø"];

  const newDanishString = danishString.split("");

  const danishLetterFound = [];
  let total = 0;
  letters = {};

  for (const [key, value] of Object.entries(letters)) {
    console.log(`${key}: ${value}`);
  }

  newDanishString.map((item) => {
    if (danishLetters.includes(item)) {
      danishLetterFound.push(item);
      total++;
    }
  });

  danishLetterFound.map((i) => {
    return letters[i] = letters[i] ? letters[i]+1 : 1
  });

  let result = {total: total}

  for (key in letters) {
    result[key] = letters[key]
  }

  console.log(result);
  return result;
}
findDanishLetter();


