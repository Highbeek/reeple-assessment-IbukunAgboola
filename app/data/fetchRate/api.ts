import axios from 'axios';

export const fetchRate = async () => {
  try {
    const response = await axios.get(
      'https://v6.exchangerate-api.com/v6/7e9ff175ac6dc7b5feaecbe1/latest/USD',
    );

    const conversionRates = response.data.conversion_rates;

    const majorCurrencies = [
      'USD',
      'EUR',
      'GBP',
      'JPY',
      'AUD',
      'CAD',
      'CHF',
      'CNY',
      'INR',
      'NGN',
    ];

    const filteredRates = Object.fromEntries(
      Object.entries(conversionRates).filter(([currency]) =>
        majorCurrencies.includes(currency),
      ),
    );

    return filteredRates;
  } catch (error) {
    console.error('Error fetching exchange rates:', error);
    throw error;
  }
};
