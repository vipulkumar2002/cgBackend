const User = require("../models/userModel");
const catchAsyncErr = require("../middleware/catchAsyncErr");

//Register a Admin
exports.createAdmin = catchAsyncErr(async (req, res) => {
  const { userName, userId, password } = req.body;
  const user = await User.create({
    userName,
    userId,
    password,
  });

  res.status(201).json({
    massage: "User registered !",
    user,
    success: true,
  });
});

exports.getAllAdmin = async (req, res) => {
  const user = await User.find(req.body);

  res.status(200).json({
    massage: "All admin find !",
    user,
    success: true,
  });
};
