require("dotenv").config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const {Ideas} = require('./db/schema.js')
app.use(express.static(__dirname + '/client/build/'));

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})

const connection = mongoose.connection
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully')
})

// If the connection throws an error
connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err)
})

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

const ideasController = require('./controllers/IdeasController.js')
app.use('/ideas', ideasController)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT)
})