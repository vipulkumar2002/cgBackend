// Importing Models
const catchAsyncErr = require("../middleware/catchAsyncErr");
const Placement = require("../models/placementModel");
const ErrorHander = require("../utils/errorHandler");

//Create Placement --- Admin
exports.createPlacement = catchAsyncErr(async (req, res) => {
  const placement = await Placement.create(req.body);
  res.status(201).json({
    message: "placement Profile Created !",
    placement,
    success: true,
  });
});

//get  All Placement --- User
exports.getAllPlacements = catchAsyncErr(async (req, res) => {
  const placements = await Placement.find(req.body);
  res.status(200).json({
    message: "All placements finds !",
    placements,
    success: true,
  });
});

//Update Placement Profile
exports.updatePlacement = catchAsyncErr(async (req, res) => {
  let placement = await Placement.findById(req.params.id);

  if (!placement) {
    return next(new ErrorHander("Failed to find placement Profile !", 404));
    // return res.status(500).json({
    //   massage: "Failed to find placement Profile !",
    //   success: false,
    // });
  }

  placement = await Placement.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    message: "Placement Profile Updated !",
    placement,
    success: true,
  });
});

// Delete placement Profile
exports.deletePlacement = catchAsyncErr(async (req, res) => {
  const placement = await Placement.findById(req.params.id);
  if (!placement) {
    return next(new ErrorHander("Failed to find placement Profile !", 404));
    // res.status(500).json({
    //   massage: "Failed to find placement Profile !",
    //   success: false,
    // });
  }

  await placement.remove();

  res.status(200).json({
    message: "placement Profile Deleted !",
    success: true,
  });
});

// Get Profile details
exports.getProfileDetails = catchAsyncErr(async (req, res, next) => {
  const placement = await Placement.findById(req.params.id);

  if (!placement) {
    return next(new ErrorHander("Failed to find placement Profile !", 404));
    // res.status(500).json({
    //   massage: "Failed to find placement Profile !",
    //   success: false,
    // });
  }

  res.status(200).json({
    message: "Details of placement ",
    placement,
    success: true,
  });
});
