const express = require("express");
require("./db/config");

//models
const User = require("./db/User");
const Profile = require("./db/Profile");
const app = express();
const fs = require("fs");
const cors = require("cors");
//meddile ware
app.use(express.json());
app.use(cors());

//Admin
app.post("/admin", async (req, res) => {
  const admin = new User(req.body);
  let result = await admin.save();
  result = result.toObject();
  delete result.password;
  res.send(result);
});

//login
app.post("/login", async (req, res) => {
  if (req.body.password && req.body.userId) {
    let user = await User.findOne(req.body).select("-password");
    if (user) {
      res.send(user);
    } else {
      res.send("user not found");
    }
  } else {
    res.send({ result: "No not found" });
  }
});

//Profile
app.post("/profile", async (req, res) => {
  try {
    let profile = new Profile(req.body);
    let result = await profile.save();
    res.json({
      massage: "date find",
      res,
      result,
      success: true,
    });
  } catch (error) {
    res.json(error);
  }
});
app.listen(4000);
