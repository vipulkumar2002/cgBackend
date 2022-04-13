const User = require("../models/userModel");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErr = require("../middleware/catchAsyncErr");
//Register a Admin
exports.createAdmin = catchAsyncErr(async (req, res) => {
  const { userName, userId, password } = req.body;
  const user = await User.create({
    userName,
    userId,
    password,
  });

  const token = user.getJWTToken();
  res.status(201).json({
    message: "User registered !",
    user,
    token,
    success: true,
  });
});

//  get all registered users -- Admin
exports.getAllAdmin = catchAsyncErr(async (req, res) => {
  const user = await User.find(req.body);

  res.status(200).json({
    message: "All admin find !",
    user,
    success: true,
  });
});

// Admin (User) login
exports.adminLogin = catchAsyncErr(async (req, res, next) => {
  const { userId, password } = req.body;
  // checking if user has give password and email both
  if (!userId || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ userId }).select("+password");
  if (!user) {
    return next(new ErrorHandler("Invalid email or password", 401)); // 401 => unautharised
  }
  // comparing Password is matched  or not
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401)); // 401 => unautharised
  }

  const token = user.getJWTToken();
  res.status(200).json({
    message: "User Loged in Successfully !",
    token,
    password,
    success: true,
  });
});
