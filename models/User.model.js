// User model here
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      unique: true
    },
    email: {
      type: String,
      required: [true, 'password is required'],
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: [true, 'Password is required']
    }
  }
)

module.exports = model('User', userSchema);