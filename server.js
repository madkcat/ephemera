// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const path = require('path');
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').load();

// Sets up the Express App
// =============================================================
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

// Requiring our models for syncing
const db = require("./models");
const models = require('./models');

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Static directory
app.use(express.static("public"));

// Routes
// =============================================================
const authRoute = require('./controllers/auth.js')(app, passport);

// Strategies
// =============================================================
require('./config/passport/passport.js')(passport, models.user);

// Passport
// =============================================================
app.use(
  session({ secret: 'rHUyjs6RmVOD06OdOTsVAyUUCxVXaWci', resave: true, saveUninitialized: true })
); // session secret
app.use(passport.initialize());
app.use(passport.session());

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});

// Sync Database
models.sequelize
  .sync()
  .then(function() {
    console.log('Database Connected');

    app.listen(8080, function(err) {
      if (!err) console.log('Connected at http://localhost:8080');
      else console.log(err);
    });
  })
  .catch(function(err) {
    console.log(err, 'Error on Database Sync. Please try again!');
  });
