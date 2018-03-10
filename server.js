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

var PORT = process.env.PORT || 8080;

var mysql = require('mysql');

var con;
if(process.env.JAWSDB_URL) {
  //Heroku deployment
    con = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  //local host
    con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "root",
      database: "ephemera",
      port: 3306
    });
};

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM qs", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "ephemera",
//   port: 8889
// });



// app.get("/api/questions", function(req, res, err) {
//   con.connect(function(err) {
//     if (err) throw err;
//     con.query("SELECT * FROM qs", function (err, result, fields) {
//       if (err) throw err;
//       res.json(result);
//     });
//   });
// });
// Requiring our models for syncing
const db = require("./models");
const models = require('./models');

require('./routes/api-routes.js')(app);



require('./routes/html-routes.js')(app);


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
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);

  });
});

// Sync Database
// models.sequelize
//   .sync()
//   .then(function() {
//     console.log('Database Connected');

  //   app.listen(PORT, function(err) {
  //     if (!err) console.log('Connected at http://localhost:8080');
  //     else console.log(err);
  //   });
  // })
  // .catch(function(err) {
  //   console.log(err, 'Error on Database Sync. Please try again!');
  // });

// var db        = {};
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// module.exports = db;
