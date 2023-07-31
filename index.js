const prompt = require("prompt-sync")();

const amount = parseFloat(prompt("Enter the amount to convert: "));

let fromCurrency = currencyInputControl(
  "Enter the currency to convert from (EUR, USD, GBP, JPY): "
);
let toCurrency = currencyInputControl(
  "Enter the currency to convert to (EUR, USD, GBP, JPY): "
);

console.log(convertCurrency(amount, fromCurrency, toCurrency));

function currencyInputControl(promptMessage) {
  let currency = 0;
  do {
    currency = prompt(promptMessage).toUpperCase();
  } while (
    currency != "EUR" &&
    currency != "USD" &&
    currency != "GBP" &&
    currency != "JPY"
  );

  return currency;
}

function convertCurrency(amount, fromCurrency, toCurrency) {
  let exchangeRate = getExchange();
  

  switch (fromCurrency) {
    case "EUR":
      switch (toCurrency) {
        case "USD":
          return amount * exchangeRate + "$";
        case "GBP":
          return amount * exchangeRate + "£";
        case "JPY":
          return amount * exchangeRate + "¥";
        default:
          return NaN;
      }
      break;
    case "USD":
      switch (toCurrency) {
        case "EUR":
          return amount * exchangeRate + "€";
          break;
        case "GBP":
          return amount * exchangeRate + "£";
        case "JPY":
          return amount * exchangeRate + "¥";
        default:
          return NaN;
      }
      break;
    case "GBP":
      switch (toCurrency) {
        case "EUR":
          return amount * exchangeRate + "€";
        case "USD":
          return amount * exchangeRate + "$";
        case "JPY":
          return amount * exchangeRate + "¥";
        default:
          return NaN;
      }
    case "JPY":
      switch (toCurrency) {
        case "EUR":
          return amount * exchangeRate + "€";
        case "USD":
          return amount * exchangeRate + "$";
        case "GBP":
          return amount * exchangeRate + "£";
        default:
          return NaN;
      }
      break;
    default:
      return NaN;
  }

  return amount * exchangeRate;
}
async function getExchange(fromCurrency, toCurrency) {
  const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${fromCurrency}&to=${toCurrency}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e56cb3d176mshd9b8080b057c0cbp10f7b7jsn04af09923bdd',
      'X-RapidAPI-Host': 'currency-exchange.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json().then(x);
    return result;
  } catch (error) {
    console.error(error);
  }
}
