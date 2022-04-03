const transporter = require("../configs/mail");
const creatDraft = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: '"Acko 👻" support@acko.com', // sender address
      to: email, // list of receivers
      subject: `Welcome to Acko insurance`, // Subject line
      text: `Hi , Please confirm your email address ,your otp is ${otp}`, // plain text body
      html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
  <div style="margin:50px auto;width:70%;padding:20px 0">
    <div style="border-bottom:1px solid #eee">
      <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Acko</a>
    </div>
    <p style="font-size:1.1em">Hi,</p>
    <p>Thank you for choosing Acko. Use the following OTP to complete your Sign Up procedures. OTP is valid for 5 minutes</p>
    <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
    <p style="font-size:0.9em;">Regards,<br />Acko</p>
    <hr style="border:none;border-top:1px solid #eee" />
    <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
      <p>Acko Inc</p>
      <p>1600 Amphitheatre Parkway</p>
      <p>California</p>
    </div>
  </div>
</div>`,
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = creatDraft;
