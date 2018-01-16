const mongoose = require('mongoose')
const Schema = mongoose.Schema

const IdeaSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String
  }
})

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true

  },
  password: {
    type: String
  },
  ideas: [IdeaSchema]
})

const User = mongoose.model('User', UserSchema)
const Idea = mongoose.model('Idea', IdeaSchema)

module.exports = {
  User,
  Idea
}