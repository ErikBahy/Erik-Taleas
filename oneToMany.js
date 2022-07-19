const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema({
  name: String,
});

const Owner = mongoose.model("Owner", ownerSchema);

const houseSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  zip: String,
  owner: { type: mongoose.Types.ObjectId, ref: "Owner" },
});

const House = mongoose.model("House", houseSchema);

// Create a Owner
const erik = await Owner.create({ name: "Erik Calaj" });

// Create a new house
House.create({
  street: "Nyslym Shyri",
  city: "Tirane",
  state: "ALbania",
  zip: "666",
  owner: erik,
});

// query for all houses, use populate to include owner info
House.find({}).populate("owner");
