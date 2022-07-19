module.exports.CarController = (app) => {
  const { Car } = require("../models/Car.js");

  app.get("/cars", async (req, res) => {
    res.json(await Car.find());
  });

  app.post("/cars", async (req, res) => {
    console.log(req.body);
    const newCar = new Car(req.body);
    await newCar.save();
    res.json(newCar);
  });

  app.delete("/cars/:id", async (req, res) => {
    const removedCarResult = await Car.remove({ _id: req.params.id });
    res.json(removedCarResult);
  });

  app.patch("/change_black_cars_to_color", async (req, res) => {
    const updatedCar = await Car.updateMany(
      { color: "black" },
      { $set: { color: req.body.color } }
    );
    res.json(updatedCar);
  });
};
