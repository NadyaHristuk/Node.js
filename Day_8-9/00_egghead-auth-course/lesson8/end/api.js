const express = require("express");
const bodyParser = require("body-parser");
const expressjwt = require("express-jwt");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8887;

app.use(bodyParser.json());
app.use(cors());

const jwtCheck = expressjwt({
  secret: 'mBSrHioSsN2Xv7SMGlhe5ayvYb71AtyJ',
   issuer: "https://apipass.auth0.com/"
});

app.get("/", (req, res) => {
    res
    .status(200)
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get("/resource", (req, res) => {
    res
    .status(200)
    .send("Public resource, you can see this");
});

app.get("/resource/secret", jwtCheck, (req, res) => {
    res
    .status(200)
    .send("Secret resource, you should be logged in to see this");
});

app.get("*", (req, res) => {
    res.sendStatus(404);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});