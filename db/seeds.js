// seeds.js

require('dotenv').config()

const mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})

const Idea = require('./models/Idea')

const mars = new Idea({title: 'Fly to Mars', content: "Earth isn't Red enough. Let's move to a new planet"})
const boring = new Idea({title: 'More Holes', description: "Traffic is terrible. I'm going to dig some holes."})
const tesla = new Idea({title: 'Build a Car', content: "Gas is too expensive. I'm gonna build a car that doesn't need gas"})

Idea
  .remove({})
  .then(() => mars.save())
  .then(() => tesla.save())
  .then(() => boring.save())
  .then(() => console.log('Successful Save!!!'))
  .then(() => mongoose.connection.close())
  .catch((error) => console.log(error))