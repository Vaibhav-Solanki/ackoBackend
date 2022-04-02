require("dotenv").config();
const express = require("express");
const connect = require("./configs/db");
const core = require("cors");
var app = express();
app.use(core());
app.use(express.json());
// var bodyParser = require("body-parser");
// const cookieParser = require("cookie-parser");
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cookieParser());

app.use("/", require("./controllers/Auth"));
app.use("/pay", require("./routes/server"));

let port = process.env.PORT || 3000;

module.exports = function () {
  connect();
  app.listen(port, () => {
    console.log("Server is started");
  });
};
