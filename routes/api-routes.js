// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models/questions.js");
const express = require("express");

const app = express();

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/questions", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Questions.findAll({}).then(function(qs) {
      // We have access to the todos as an argument inside of the callback function
      res.send(qs);
    //   console.log(qs);
    });
    console.log("route works");
  });


  // POST route for saving a new todo
  // app.post("/api/", function(req, res) {
  //   console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    // db.qs.create({
    //   text: req.body.text,
    //   complete: req.body.complete
    // }).then(function(qs) {
      // We have access to the new todo as an argument inside of the callback function
  //     res.send(qs);
  //   });
  // });


};
