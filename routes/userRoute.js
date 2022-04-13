const express = require("express");
const {
  createAdmin,
  getAllAdmin,
  adminLogin,
} = require("../controllers/userController");
const router = express.Router();

router.route("/admin/new").post(createAdmin);
router.route("/admins").get(getAllAdmin);
router.route("/admin/login").post(adminLogin);

module.exports = router;
