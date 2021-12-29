const express = require("express");
const bodyParser = require("body-parser");
const { join } = require("path");
const index = require("./routes/index");
const app = express();
app.set("views", join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", index);
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
