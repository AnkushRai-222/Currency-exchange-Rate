const express = require('express');
const route = require('./src/routes/route.js')
const cors = require("cors")
const app = express()


app.use(express.json())
app.use(cors())

app.use('/',route)


app.listen(3001, () => {
    console.log('Server running on port 3001');
  });