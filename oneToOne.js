const mongoose = require("mongoose");

const Owner = new mongoose.Schema({
  name: String,
});

const houseSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
  owner: Owner,
});

const House = mongoose.model("House", houseSchema);
// Create a new house
House.create({
  street: "Rruga e Elbasanit",
  city: "Tirane",
  state: "Albania",
  zip: "77777",
  owner: { name: "Erik Calaj" },
});

// query for all houses, will include the nested owner info
House.find({});
