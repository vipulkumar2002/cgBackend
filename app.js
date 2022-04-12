const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./middleware/error");
//Middlewere
app.use(express.json());
app.use(cors());

//Middleware for error
app.use(errorMiddleware);
//Route Import
const internship = require("./routes/internshipRoute");
const placement = require("./routes/placementRoute");

const user = require("./routes/userRoute");

app.use("/users", user);
app.use("/profiles", internship);
app.use("/profiles", placement);

module.exports = app;
