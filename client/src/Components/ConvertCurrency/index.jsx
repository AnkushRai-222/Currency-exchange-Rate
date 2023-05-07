import React, { useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Paper,
  Typography,
} from "@material-ui/core";

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
  },
}));

const Convert = () => {
  const classes = useStyles();
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState(1);
  const [maxValue, setMaxValue] = useState(null);
  const [minValue, setMinValue] = useState(null);

  const handleConversion = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`
      );
      const { max_value, min_value } = response.data;
      setMaxValue(max_value);
      setMinValue(min_value);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.convertContainer}>
      <Paper className={classes.convertBox} elevation={3}>
        <Typography variant="h5" component="h2" gutterBottom>
          Convert Currency
        </Typography>
        <form className={classes.convertForm}>
          <FormControl>
            <InputLabel id="from-currency-label">From:</InputLabel>
            <Select
              labelId="from-currency-label"
              id="from-currency"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <MenuItem value="INR">INR</MenuItem>
              <MenuItem value="KRW">KRW</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="CNY">CNY</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel id="to-currency-label">To:</InputLabel>
            <Select
              labelId="to-currency-label"
              id="to-currency"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <MenuItem value="INR">INR</MenuItem>
              <MenuItem value="KRW">KRW</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="CNY">CNY</MenuItem>
            </Select>
          </FormControl>
          <TextField
            className={classes.convertInput}
            id="amount"
            label="Amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            InputProps={{ inputProps: { min: 0 } }}
          />
          <Button
            className={classes.convertButton}
            variant="contained"
            onClick={handleConversion}
          >
            Convert
          </Button>
        </form>
        {maxValue !== null && (
          <div className={classes.resultBox}>
            <Typography variant="subtitle1" gutterBottom>
              Max value: {maxValue}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Min value: {minValue}
            </Typography>
          </div>
        )}
      </Paper>
    </div>
  );
};

export default Convert;
