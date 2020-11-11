// bin/seeds.js
const mongoose = require('mongoose');
const User = require('../models/User.model.js');
const DB_NAME = 'express-basic-auth-dev';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

User.create()
  .then(usersFromDB => {
    console.log(`Created ${usersFromDB.length} books`);
    // Once created, close the DB connection
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));