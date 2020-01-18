const express = require("express");
const serverless = require("serverless-http");
const app = express();
const mma = require("mma");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "world!"
  });
});

router.get("/fighter/:name", (req, res) => {
  console.log(req.params.name);
  mma.fighter(req.params.name, data => {
    res.json({
      data
    });
  });
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
