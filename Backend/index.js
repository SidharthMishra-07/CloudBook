const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors');
require("dotenv").config();

connectToMongo();

//Taken from express.js official website 'hello world'
const app = express()
const port = 5000

app.use(cors());
app.use(express.json());

//Available Routes (Linked routes from routes folder)
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`CloudBook Backend listening at http://localhost:${port}`)
})