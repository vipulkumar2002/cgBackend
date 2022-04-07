const mongoose = require("mongoose");

const placementSchema = mongoose.Schema({
  person_name: { type: String, required: [true, "Please enter Name"] },
  company_name: { type: String, required: [true, "Please enter CompanyName"] },
  job_role: { type: String, required: [true, "Please enter jobRole"] },
  employ_type: { type: String, required: [true, "Please enter Intern/Job"] },
  linkedin: { type: String, required: [true, "Please enter Linkedin"] },
  image_url: { type: String, required: [true, "Please enter ImagUrl"] },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("placements", placementSchema);
