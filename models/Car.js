const mongoose = require("mongoose");
const { db } = require("../database.js");

var CarSchema = db.Schema({
  brand: String,
  color: String,
  isAWD: Boolean,
});

Car = db.model("Car", CarSchema);

module.exports.Car = Car;
