const express = require("express");
const { GoogleLogin } = require("../controller/auth");

const router = express.Router();

router.post("/googlelogin", GoogleLogin);
module.exports = router;
