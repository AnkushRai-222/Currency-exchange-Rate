import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  convertContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  convertBox: {
    width: 500,
    padding: theme.spacing(4),
    border: "2px solid #ccc",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
  },
  convertForm: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  convertInput: {
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.grey[400]}`,
  },
  convertButton: {
    padding: theme.spacing(1.5, 3),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    border: "none",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  resultBox: {
    marginTop: theme.spacing(2),
    fontWeight:"Bold"
  },
}));

const CurrencyExchange = () => {
  const classes = useStyles();

  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(null);

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const handleExchangeRateRequest = async () => {
    try {
      const response = await axios.get(
        `https://currencyexchange-865o.onrender.com/currency-exchange?from=${fromCurrency}&to=${toCurrency}`
      );
      setExchangeRate(response.data[0].exchange_rate);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.convertContainer}>
      <div className={classes.convertBox}>
        <Typography variant="h5" gutterBottom>
          Currency Exchange
        </Typography>
        <div className={classes.convertForm}>
          <Select
            className={classes.convertInput}
            value={fromCurrency}
            onChange={handleFromCurrencyChange}
          >
            <MenuItem value="INR">INR</MenuItem>
            <MenuItem value="KRW">KRW</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="CNY">CNY</MenuItem>
          </Select>
          <Select
            className={classes.convertInput}
            value={toCurrency}
            onChange={handleToCurrencyChange}
          >
            <MenuItem value="INR">INR</MenuItem>
            <MenuItem value="KRW">KRW</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            <MenuItem value="CNY">CNY</MenuItem>
          </Select>
          <Button
            className={classes.convertButton}
            variant="contained"
            color="primary"
            onClick={handleExchangeRateRequest}
          >
            Get Exchange Rate
            </Button>
    </div>
    {exchangeRate && (
      <div className={classes.resultBox}>
          <Typography className={classes.exchangeRate}>
          Exchange rate from {fromCurrency} to {toCurrency}: {exchangeRate}
        </Typography>
      </div>
    )}
  </div>
</div>
);
};

export default CurrencyExchange;
