const Admin = require("../models/userModel");

//Create Admin
exports.createAdmin = async (req, res) => {
  const admin = await Admin.create(req.body);

  res.status(201).json({
    massage: "Admin Created !",
    admin,
    success: true,
  });
};

exports.getAllAdmin = async (req, res) => {
  const admin = await Admin.find(req.body);

  res.status(200).json({
    massage: "All admin find !",
    admin,
    success: true,
  });
};
