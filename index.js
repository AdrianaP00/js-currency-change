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
  let exchangeRate = 0;

  switch (fromCurrency) {
    case "EUR":
      switch (toCurrency) {
        case "USD":
          exchangeRate = 1.17;
          return amount * exchangeRate + "$";
        case "GBP":
          exchangeRate = 0.85;
          return amount * exchangeRate + "£";
        case "JPY":
          exchangeRate = 130.0;
          return amount * exchangeRate + "¥";
        default:
          return NaN;
      }
      break;
    case "USD":
      switch (toCurrency) {
        case "EUR":
          exchangeRate = 0.85;
          return amount * exchangeRate + "€";
          break;
        case "GBP":
          exchangeRate = 0.73;
          return amount * exchangeRate + "£";
        case "JPY":
          exchangeRate = 110.0;
          return amount * exchangeRate + "¥";
        default:
          return NaN;
      }
      break;
    case "GBP":
      switch (toCurrency) {
        case "EUR":
          exchangeRate = 1.18;
          return amount * exchangeRate + "€";
        case "USD":
          exchangeRate = 1.37;
          return amount * exchangeRate + "$";
        case "JPY":
          exchangeRate = 150.0;
          return amount * exchangeRate + "¥";
        default:
          return NaN;
      }
    case "JPY":
      switch (toCurrency) {
        case "EUR":
          exchangeRate = 0.0077;
          return amount * exchangeRate + "€";
        case "USD":
          exchangeRate = 0.0091;
          return amount * exchangeRate + "$";
        case "GBP":
          exchangeRate = 0.0067;
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
