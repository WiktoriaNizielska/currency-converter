let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let currency = currencyElement.value;
    let result;

    switch (currency) {
        case "USD":
            result = amount / 4.39;
            break;

        case "EUR":
            result = amount / 4.66;
            break;

        case "SEK":
            result = amount / 0.41;
            break;

        default:
            result = amount / 4.72;
            break;
    }
    
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
});







