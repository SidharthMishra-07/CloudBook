const connectToMongo = require('./db');
const express = require('express')

connectToMongo();

//Taken from express.js official website 'hello world'
const app = express()
const port = 3000

//Available Routes
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})