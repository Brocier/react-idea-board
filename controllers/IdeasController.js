const express = require('express')
const router = express.Router()
const Idea = require('../db/models/Idea.js')

router.get('/', (req, res) => {
  Idea
    .find({})
    .then((ideas) => {
      res.json(ideas)
    })
    .catch((err) => console.log(err))
})

module.exports = router