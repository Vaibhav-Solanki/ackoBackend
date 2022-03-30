require("dotenv").config();
var PaytmConfig = {
  mid: process.env.mid,
  key: process.env.key,
  website: "WEBSTAGING",
};
module.exports.PaytmConfig = PaytmConfig;
