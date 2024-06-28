import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_FaOU7ACh0YliNo0bpQkfGTozib9qC6ahPYIw5Wak');


export async function convertCurrency(amount, fromCurrency, toCurrency) {
    try {
        const response = await freecurrencyapi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        });

        // Extract the exchange rate from the response
        const exchangeRate = response.data[toCurrency];

        // Calculate the converted amount
        const convertedAmount = amount * exchangeRate;
        
            // Return the converted amount
        return convertedAmount;
    } catch (error) {
        // Handle any errors that occur during the conversion
        console.log(`Error converting currency: ${error.message}`);
    }
}

