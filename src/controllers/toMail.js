const transporter = require("../configs/mail");
const creatDraft = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: '"Acko 👻" support@acko.com', // sender address
      to: email, // list of receivers
      subject: `Welcome to Acko insurance`, // Subject line
      text: `Hi , Please confirm your email address ,your otp is ${otp}`, // plain text body
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = creatDraft;
