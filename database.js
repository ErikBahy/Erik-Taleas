const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_CONNECTION_URL);

module.exports.db=mongoose