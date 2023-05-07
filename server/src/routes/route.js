const express = require('express');
const router = express.Router()
const {currencyExchange, convert} = require("../controllers/currencyExchange")


router.get('/currency-exchange' , currencyExchange)
router.get('/convert',convert)

module.exports = router