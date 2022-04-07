const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  userName: { type: String, required: [true, "Please enter userName"] },
  userId: { type: String, required: [true, "Please enter userId"] },
  password: { type: String, required: [true, "Plsase, enter pasaward"] },
});

module.exports = mongoose.model("users", adminSchema);
