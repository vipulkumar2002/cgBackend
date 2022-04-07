const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const userSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please enter userName"],
    maxLength: [20, "Name cann't exceed 20 character"],
    minLength: [5, "Name should have more than 5 character"],
  },
  userId: {
    type: String,
    required: [true, "Please enter userId"],
    unique: true,
    // validate: [validator.isEmail, "please Enter a valid Email"],
  },
  password: {
    type: String,
    required: [true, "Plsase, enter pasaward"],
    maxLength: [16, "Name cann't exceed 16 character"],
    minLength: [8, "Name should have more than 8 character"],
    select: false,
  },
  role: {
    type: String,
    default: "admin",
  },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("users", userSchema);
