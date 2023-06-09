const prompt = require('prompt-sync')();

const amount = parseFloat(prompt('Enter the amount to convert: '));

let fromCurrency = currencyInputControl('Enter the currency to convert from (EUR, USD, GBP, JPY): ');
let toCurrency = currencyInputControl('Enter the currency to convert to (EUR, USD, GBP, JPY): ');
console.log(convertCurrency(amount, fromCurrency, toCurrency));

function currencyInputControl(promptMessage){
  let currency = 0;
  do {
    currency = prompt(promptMessage).toUpperCase();
  } while (currency != 'EUR' &&
           currency != 'USD' &&
           currency != 'GBP' &&
           currency != 'JPY');

  return currency;
}

function convertCurrency(amount, fromCurrency, toCurrency) {
  let exchangeRate = 0;

  switch (fromCurrency) {
    case 'EUR':
      switch (toCurrency) {
        case 'USD':
          exchangeRate = 1.17;
          break;
        case 'GBP':
          exchangeRate = 0.85;
          break;
        case 'JPY':
          exchangeRate = 130.0;
          break;
        default:
          return NaN;
      }
      break;
    case 'USD':
      switch (toCurrency) {
        case 'EUR':
          exchangeRate = 0.85;
          break;
        case 'GBP':
          exchangeRate = 0.73;
          break;
        case 'JPY':
          exchangeRate = 110.0;
          break;
        default:
          return NaN;
      }
      break;
    case 'GBP':
      switch (toCurrency) {
        case 'EUR':
          exchangeRate = 1.18;
          break;
        case 'USD':
          exchangeRate = 1.37;
          break;
        case 'JPY':
          exchangeRate = 150.0;
          break;
        default:
          return NaN;
      }
      break;
    case 'JPY':
      switch (toCurrency) {
        case 'EUR':
          exchangeRate = 0.0077;
          break;
        case 'USD':
          exchangeRate = 0.0091;
          break;
        case 'GBP':
          exchangeRate = 0.0067;
          break;
        default:
          return NaN;
      }
      break;
    default:
      return NaN;
  }

  return amount * exchangeRate;
}