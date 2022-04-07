const express = require("express");

//Importing Controller
const {
  getAllPlacements,
  createPlacement,
  updatePlacement,
  deletePlacement,
} = require("../controllers/placementController");

const router = express.Router();

// placements Route
router.route("/placements").get(getAllPlacements);
router.route("/placement/new").post(createPlacement);
router.route("/placement/:id").put(updatePlacement).delete(deletePlacement);
module.exports = router;
