let exchangeRates;

const getExchangeData = async () => {
  const res = await fetch("https://open.er-api.com/v6/latest/USD");
  const data = await res.json();
  exchangeRates = data.rates;
  const currenciesList = Object.keys(exchangeRates);
  console.log(exchangeRates);
  console.log(currenciesList);

  const currencyFromDropdown = document.getElementById("currency-from");
  const currencyToDropdown = document.getElementById("currency-to");

  currenciesList.forEach((currency) => {
  const option = document.createElement("option");
  option.text = currency;
  if (currency === "EUR") {
    option.setAttribute("selected", true);
  }
  currencyFromDropdown.add(option);
  });

  currenciesList.forEach((currency) => {
  const option = document.createElement("option");
  option.text = currency;
  if (currency === "DKK") {
    option.setAttribute("selected", true);
  }
  currencyToDropdown.add(option);
  });
  
  };
  getExchangeData();
  
  const btnTag = document.getElementById("btn");
  const inputTag= document.getElementById("amount");
  const dropdownFrom = document.getElementById("currency-from");
  const dropdownTo = document.getElementById("currency-to");
  const outputTag = document.getElementById("output")
  const switchButton = document.getElementById("switch")




  const getAmount =  (event) => {
  event.preventDefault()
  const interredAmount = inputTag.value;
  const currencyFrom = dropdownFrom.value;
  const currencyTo = dropdownTo.value;
  console.log(interredAmount)
  console.log(currencyFrom)
  console.log(currencyTo)
  const value1 = exchangeRates[currencyFrom]
  const value2 = exchangeRates[currencyTo]
  console.log(value1)
  console.log(value2)
  const result = (interredAmount * (value2 / value1).toFixed(2))
  console.log(result)
  outputTag.innerText = `Result: ${result}`;


  }
  btnTag.addEventListener("click", getAmount)
  
  switchButton.addEventListener("click", ()=> {
    const temp = dropdownFrom.value;
    dropdownFrom.value = dropdownTo.value
    dropdownTo.value = temp;
  })