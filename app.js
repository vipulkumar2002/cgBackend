const express = require("express");
const app = express();

//Middlewere
app.use(express.json());

//Route Import
const internship = require("./routes/internshipRoute");
const user = require("./routes/userRoute");

app.use("/profiles", internship);
app.use("/users", user);

module.exports = app;
