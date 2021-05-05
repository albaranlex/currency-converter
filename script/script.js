//SELECTORS
const userInput = document.querySelector(".amount");
const currencyInput = document.querySelector(".end-currency-type");
const endAmount = document.querySelector(".end-amount");
const convertButton = document.querySelector("#convert");

const currencyRates = {
  usd: 1.2,
  jpy: 131.13,
  gbp: 0.86,
  aud: 1.55,
  cad: 1.47,
  chf: 1.1,
  cny: 7.77,
  sek: 10.19,
  nzd: 1.66,
};

//FUNCTIONS
function convertCurrency() {
  let amount = userInput.value;
  let targetCurrency = currencyRates[currencyInput.value];
  let convertedAmount = amount * targetCurrency;
  endAmount.innerText = convertedAmount.toFixed(2);
}

//EVENT LISTENERS
convertButton.addEventListener("click", convertCurrency);
currencyInput.addEventListener("change", convertCurrency);
