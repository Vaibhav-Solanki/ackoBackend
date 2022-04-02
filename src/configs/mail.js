const nodemailer = require("nodemailer");
module.exports = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "8e6571b59af6c0",
    pass: "9b6be8a3458a0c",
  },
});
