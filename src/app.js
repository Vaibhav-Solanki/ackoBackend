require("dotenv").config();
const express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routes/server"));

let port = process.env.PORT || 1234;

module.exports = function () {
  app.listen(port, () => {
    console.log("Server is started");
  });
};
