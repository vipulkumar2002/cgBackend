const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "Top_Secret_code";
const JWT_EXPIRE = 86400;
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
    validate: [validator.isEmail, "please Enter a valid Email"],
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

// bcrypt
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

//JWT Token
userSchema.methods.getJWTToken = function () {
  return jwt.sign({ id: this._id }, SECRET_KEY, { expiresIn: JWT_EXPIRE });
};

// Compare password
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("users", userSchema);
