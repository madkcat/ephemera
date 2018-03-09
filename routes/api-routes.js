// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the qs
  app.get("/api/hiscores", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.hiScore.findAll({}).then(function(hiScore) {
      // We have access to the todos as an argument inside of the callback function
      res.send(hiScore);
    //   console.log(qs);
    });
    console.log("route works");
  });


  
  app.get("/api/questions", function(req, res) {
    console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    db.qs.findAll({}).then(function(qs) {
      // We have access to the todos as an argument inside of the callback function

      res.json(qs);
      
    });
  });

};
