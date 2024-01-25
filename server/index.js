const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authaRoutes = require("./routes/auth");
const googleAuthRoutes = require("./routes/oauth");
const app = express();
app.use(
  cors({
    origin: [process.env.FRONTEND_BASEURL, process.env.FRONTEND_BASEURL_LOCAL],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
const port = 5050;
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/auth", authaRoutes);
app.use("/googleAuth", googleAuthRoutes);
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
