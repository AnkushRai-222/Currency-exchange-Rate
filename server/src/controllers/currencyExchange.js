const axios = require('axios');

const sources = [
  'https://api.frankfurter.app/latest',
  'https://api.exchangerate.host/latest',
];

const currencyExchange = async (req, res) => {
  const { from, to } = req.query;

  const promises = sources.map(async (source) => {
    const url = `${source}?base=${from}&symbols=${to}`;
    try {
      const response = await axios.get(url);
      const exchange_rate = response.data.rates[to];
      return { exchange_rate, source };
    } catch (error) {
      console.error(`Error fetching exchange rate from ${source}: ${error.message}`);
      return { exchange_rate: null, source };
    }
  });

  try {
    const results = await Promise.all(promises);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

const convert = async (req, res) => {
  const { from, to, amount } = req.query;

  const promises = sources.map(async (source) => {
    const url = `${source}?base=${from}&symbols=${to}`;
    try {
      const response = await axios.get(url);
      const exchange_rate = response.data.rates[to];
      return { exchange_rate, source };
    } catch (error) {
      console.error(`Error fetching exchange rate from ${source}: ${error.message}`);
      return { exchange_rate: null, source };
    }
  });

  try {
    const results = await Promise.all(promises);
    const values = results
      .filter(({ exchange_rate }) => exchange_rate !== null)
      .map(({ exchange_rate }) => exchange_rate * parseFloat(amount));
    if (values.length === 0) {
      res.json({ max_value: null, min_value: null });
    } else {
      const max_value = Math.max(...values);
      const min_value = Math.min(...values);
      res.json({ max_value, min_value });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { currencyExchange, convert };
