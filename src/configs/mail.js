require("dotenv").config();
const nodemailer = require("nodemailer");
module.exports = nodemailer.createTransport({
  host: "smtppro.zoho.in",
  port: 465,
  auth: {
    user: process.env.user,
    pass: process.env.pass,
  },
});
