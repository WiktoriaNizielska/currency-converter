{
    const calculateResults = (amount, currency) => {
        switch (currency) {
            case "USD":
                return amount / 4.39;

            case "EUR":
                return amount / 4.66;

            case "SEK":
                return amount / 0.41;

            case "CHF":
                return amount / 4.72;

        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const currencyElement = document.querySelector(".js-currency");
        const amountElement = document.querySelector(".js-amount");

        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResults(amount, currency);

        updateResultText(amount, result, currency);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        formElement.addEventListener("submit", onFormSubmit);
    }

    init();

}