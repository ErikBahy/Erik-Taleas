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
});

const House = mongoose.model("House", houseSchema);

const houseOwnerSchema = {
  owner: { type: mongoose.Types.ObjectId, ref: "Owner" },
  house: { type: mongoose.Types.ObjectId, ref: "House" },
};

const HouseOwner = mongoose.model("HouseOwner", houseOwnerSchema);

// Create a Owner
const erik = await Owner.create({ name: "Erik Calaj" });

// Create a new house
const rrugaElbasanit = await House.create({
  street: "Rruga e Elbasanit",
  city: "Tirana",
  state: "Albania",
  zip: "6666",
  owner: erik,
});

// Create record that the owner owns the house
HouseOwner.create({ owner: erik, house: rrugaElbasanit });

// QUery for all houses owned by alex
HouseOwner.find({ owner: erik }).populate("house");

//Query for all owners of the Maple Street House
HoseOwner.find({ house: rrugaELbasanit }).populate("owner");
