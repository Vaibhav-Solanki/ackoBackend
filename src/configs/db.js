require("dotenv").config();

let mongoose = require("mongoose");
const password = process.env.PASSWORD;

let connect = () => {
  return mongoose.connect(
    `mongodb+srv://VaibhavDasss:${password}@onenetwork.ozbbj.mongodb.net/acko?retryWrites=true&w=majority`
  );
};

module.exports = connect;
