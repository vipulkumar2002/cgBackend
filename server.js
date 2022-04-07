// Importing(require) Downloaded Modules
const dotenv = require("dotenv");

// Importing(require) our modules
const app = require("./app");
const connectDatabase = require("./config/database");

//Database connection
connectDatabase();

//Config
dotenv.config({ path: "config/.env" });

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
