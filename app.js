const express = require("express");
require("dotenv").config();
require("./database");
const { CarController } = require("./controllers/CarController");

var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

CarController(app);

//start listening to the server
app.listen(3002);
