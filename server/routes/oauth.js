const express = require("express");
const { OAuth2Client } = require("google-auth-library");
require("dotenv").config();
const router = express.Router();
async function getUserData(access_token) {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
  );
  const data = await response.json();
  return data;
}
router.get("/login", async (req, res) => {
  const code = req.query.code;
  try {
    const redirectUrl = `${process.env.BACKEND_BASEURL}/googleAuth/login`;
    const oAuth2Client = new OAuth2Client(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      redirectUrl
    );
    const response = await oAuth2Client.getToken(code);
    await oAuth2Client.setCredentials(response.tokens);
    const oAuthUser = oAuth2Client.credentials;

    const googleUser = await getUserData(oAuthUser.access_token);
    if (googleUser) {
      return res.redirect(303, `${process.env.FRONTEND_BASEURL}/`);
    } else {
      return res.status(401).json({
        status: false,
        message: "No Data Found",
        data: null,
      });
    }
  } catch (error) {
    return res.status(401).json({
      status: false,
      message: error.message,
      data: null,
    });
  }
});
module.exports = router;
