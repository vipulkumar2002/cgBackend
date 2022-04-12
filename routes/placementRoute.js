const express = require("express");

//Importing Controller
const {
  getAllPlacements,
  createPlacement,
  updatePlacement,
  deletePlacement,
  getProfileDetails,
} = require("../controllers/placementController");

const router = express.Router();

// placements Route
router.route("/placements").get(getAllPlacements);
router.route("/placement/new").post(createPlacement);
router
  .route("/placement/:id")
  .put(updatePlacement)
  .get(getProfileDetails)
  .delete(deletePlacement);
module.exports = router;
