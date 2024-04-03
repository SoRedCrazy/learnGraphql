const mongoose = require("mongoose");

const Users = mongoose.model("Users", {
  email: String,
  name: String,
  age: Number,
});

module.exports = { Users };