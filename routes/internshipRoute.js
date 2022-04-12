const express = require("express");

//Importing Controller
const {
  getAllInternships,
  createInternship,
  updateIntrenship,
  deleteInternship,
  getProfileDetails,
} = require("../controllers/internshipController");

const router = express.Router();

// Internship Route
router.route("/internships").get(getAllInternships);
router.route("/internship/new").post(createInternship);
router
  .route("/internship/:id")
  .put(updateIntrenship)
  .delete(deleteInternship)
  .get(getProfileDetails);
module.exports = router;
