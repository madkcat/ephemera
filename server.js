// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");




// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;

var mysql = require('mysql');

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


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);

  });
});
// var db        = {};
// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// module.exports = db;
