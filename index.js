const prompt = require("prompt-sync")();
async function main() {

  const amount = parseFloat(prompt("Enter the amount to convert: "));
  let fromCurrency = currencyInputControl(
    "Enter the currency to convert from (EUR, USD, GBP, JPY): "
  );
  let toCurrency = currencyInputControl(
    "Enter the currency to convert to (EUR, USD, GBP, JPY): "
  );

  const exchangeRate = await getExchange(fromCurrency, toCurrency); 

  if (exchangeRate !== null) {
    const convertedAmount = amount * exchangeRate;
    console.log(`Converted amount: ${convertedAmount.toFixed(2)} ${toCurrency}`);
  } else {
    console.log("Invalid currency or conversion error.");
  }
}

function currencyInputControl(promptMessage) {
  let currency = "";
  const validCurrencies = ["EUR", "USD", "GBP", "JPY"];

  do {
    currency = prompt(promptMessage).toUpperCase();
  } while (!validCurrencies.includes(currency));

  return currency;
}

async function getExchange(fromCurrency, toCurrency) {
  const url = `https://currency-exchange.p.rapidapi.com/exchange?from=${fromCurrency}&to=${toCurrency}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e56cb3d176mshd9b8080b057c0cbp10f7b7jsn04af09923bdd",
      "X-RapidAPI-Host": "currency-exchange.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
}

main();
