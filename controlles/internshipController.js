// Importing Models
const Internship = require("../models/internshipModel");

//Create internships --- Admin
exports.createInternship = async (req, res) => {
  const internship = await Internship.create(req.body);

  res.status(201).json({
    massage: "internship Profile Created !",
    internship,
    success: true,
  });
};

// All Interns --- User
exports.getAllInternships = async (req, res) => {
  const internships = await Internship.find(req.body);
  res.status(200).json({
    massage: "All internships finds !",
    internships,
    success: true,
  });
};

//Update Intern Profile
exports.updateIntrenship = async (req, res) => {
  let internship = await Internship.findById(req.params.id);
  if (!internship) {
    return res.status(500).json({
      massage: "Failed to find Intern Profile !",
      success: false,
    });
  }
  internship = await Internship.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    massage: "Intren Profile Updated !",
    internship,
    success: true,
  });
};

// Delete Intern Profile
exports.deleteInternship = async (req, res) => {
  const internship = await Internship.findById(req.params.id);
  if (!internship) {
    res.status(500).json({
      massage: "Failed to find Intern Profile !",
      success: false,
    });
  }

  await internship.remove();

  res.status(200).json({
    massage: "Intern Profile Deleted !",
    success: true,
  });
};

// Get Profile details
exports.getProfileDetails = async (req, res) => {
  const internship = await Internship.findById(req.params.id);

  if (!internship) {
    res.status(500).json({
      massage: "Failed to find Intern Profile !",
      success: false,
    });
  }
  res.status(200).json({
    massage: "Details of Intern ",
    internship,
    success: true,
  });
};
