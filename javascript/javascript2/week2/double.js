//Doubling of number
const numbers = [1, 2, 3, 4];

const doubleOddNumbers = numbers
  .filter((number) => {
    return number % 2 !== 0;
  })
  .map((number) => {
    return number * 2;
  });
console.log(doubleOddNumbers);

