const express = require("express");
const { OAuth2Client } = require("google-auth-library");
require("dotenv").config();
console.log(process.env.BACKEND_BASEURL);
const router = express.Router();

router.post("/googlelogin", async (req, res) => {
  try {
    res.header(
      "Access-Control-Allow-Origin",
      `${process.env.FRONTEND_BASEURL}`
    );
    res.header("Referrer-Policy", "no-referrer-when-downgrade");
    const redirectUrl = `${process.env.BACKEND_BASEURL}/googleAuth/login`;
    const oAuth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      redirectUrl
    );
    const authorizeUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: "https://www.googleapis.com/auth/userinfo.profile email",
      prompt: "consent",
    });
    return res.json({ url: authorizeUrl });
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: error.message,
      data: null,
    });
  }
});
module.exports = router;
