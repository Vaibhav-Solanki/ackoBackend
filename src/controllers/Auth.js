const express = require("express");
const sendMail = require("./toMail");
const User = require("../models/user");
const router = express.Router();

function generateOTP() {
  var digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < 4; i++) {
    OTP += digits[Math.floor(Math.random() * 10)];
  }
  return OTP;
}

// router.get("/logout", async (req, res) => {
//   res.cookie("jwtoken", "none", {
//     expires: new Date(Date.now() + 2 * 1000),
//     httpOnly: true,
//   });
//   res
//     .status(200)
//     .json({ success: true, message: "User logged out successfully" });
// });

router.post("/email", async (req, res) => {
  let email = req.body.email;
  let otp = generateOTP();
  try {
    let user = await User.findOne({ email: email });
    if (user) {
      user.otp = otp;
      sendMail(email, otp);
      await user.save();
      return res.json({ message: "otp Has been sended" });
    }
    await sendMail(email, otp);
    user = await User.create({ email: email, otp: otp });
    return res.json({ message: "otp Has been sended" });
  } catch (error) {
    res.json({ err: error.message });
  }
});
router.post("/otp", async (req, res) => {
  let email = req.body.email;
  let otp = req.body.otp;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      if (user.otp == otp) {
        const token = await user.genrateAuthtoken();
        // res.cookie("jwtoken", token, {
        //   expires: new Date(Date.now() + 258920000),
        //   httpOnly: false,
        // });
        return res.json({ message: "signin success", token: token });
      } else return res.send({ message: "incorrect Otp" });
    }
    return res.json({ message: "incorrect Otp" });
  } catch (error) {
    res.json({ err: error.message });
  }
});
router.get("", async (req, res) => {
  try {
    let user = await User.find({}).lean().exec();
    res.json({ user: user });
  } catch (error) {
    res.json({ err: error.message });
  }
});

module.exports = router;
