const express = require("express");
const { createAdmin, getAllAdmin } = require("../controlles/userController");

const router = express.Router();

router.route("/admin/new").post(createAdmin);
router.route("/admins").get(getAllAdmin);

module.exports = router;
