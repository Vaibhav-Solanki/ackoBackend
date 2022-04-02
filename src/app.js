require("dotenv").config();
const express = require("express");
const connect = require("./configs/db");
var app = express();
app.use(express.json());
// var bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cookieParser());

app.use("/", require("./controllers/Auth"));

let port = process.env.PORT || 3000;

module.exports = function () {
  connect();
  app.listen(port, () => {
    console.log("Server is started");
  });
};
