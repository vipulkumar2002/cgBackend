// Importing Models
const catchAsyncErr = require("../middleware/catchAsyncErr");
const Placement = require("../models/placementModel");
// const ErrorHander = require("../utils/errorHandler");

//Create internships --- Admin
exports.createPlacement = catchAsyncErr(async (req, res) => {
  const placement = await Placement.create(req.body);
  res.status(201).json({
    massage: "placement Profile Created !",
    placement,
    success: true,
  });
});

//get  All Placement --- User
exports.getAllPlacements = async (req, res) => {
  const placements = await Placement.find(req.body);
  res.status(200).json({
    massage: "All placements finds !",
    placements,
    success: true,
  });
};

//Update Placement Profile
exports.updatePlacement = async (req, res) => {
  let placement = await Placement.findById(req.params.id);
  if (!placement) {
    return res.status(500).json({
      massage: "Failed to find placement Profile !",
      success: false,
    });
  }
  placement = await Placement.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    massage: "Placement Profile Updated !",
    placement,
    success: true,
  });
};

// Delete placement Profile
exports.deletePlacement = async (req, res) => {
  const placement = await Placement.findById(req.params.id);
  if (!placement) {
    res.status(500).json({
      massage: "Failed to find placement Profile !",
      success: false,
    });
  }

  await placement.remove();

  res.status(200).json({
    massage: "placement Profile Deleted !",
    success: true,
  });
};

// Get Profile details
exports.getProfileDetails = async (req, res) => {
  const placement = await Placement.findById(req.params.id);

  if (!placement) {
    res.status(500).json({
      massage: "Failed to find placement Profile !",
      success: false,
    });
  }
  res.status(200).json({
    massage: "Details of placement ",
    placement,
    success: true,
  });
};
