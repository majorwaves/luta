const express = require("express");
const serverless = require("serverless-http");
const app = express();
const sherdog = require("sherdog");
const ufc = require("ufc");
const googleIt = require("google-it");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    hello: "world!"
  });
});

router.get("/fighter/:name", async (req, res) => {
  let fighter = {
    name: "",
    nickname: "",
    fullname: "",
    record: "",
    association: "",
    age: "",
    birthday: "",
    hometown: "",
    nationality: "",
    location: "",
    height: "",
    height_cm: "",
    weight: "",
    weight_kg: "",
    weight_class: "",
    college: "",
    degree: "",
    summary: [],
    wins: {
      total: 0,
      knockouts: 0,
      submissions: 0,
      decisions: 0,
      others: 0
    },
    losses: {
      total: 0,
      knockouts: 0,
      submissions: 0,
      decisions: 0,
      others: 0
    },
    strikes: {
      attempted: 0,
      successful: 0,
      standing: 0,
      clinch: 0,
      ground: 0
    },
    takedowns: {
      attempted: 0,
      successful: 0,
      submissions: 0,
      passes: 0,
      sweeps: 0
    },
    fights: []
  };

  const results = await googleIt({ query: `${req.params.name} sherdog` });

  const topResult = results[0];

  const { link } = topResult;

  // Check if it's a sherdog link
  if (link.includes("sherdog.com")) {
    sherdog.getFighter(link, data => {
      fighter.name = data.name;
      fighter.nickname = data.nickname;
      fighter.association = data.association;
      fighter.age = data.age;
      fighter.birthday = data.birthday;
      fighter.hometown = data.locality;
      fighter.nationality = data.nationality;
      fighter.height = data.height;
      fighter.weight = data.weight;
      fighter.weight_class = data.weight_class;
      fighter.wins = data.wins;
      fighter.losses = data.losses;
      fighter.fights = data.fights;

      res.json({
        success: true,
        data: fighter
      });
    });

    // Otherwise check if it's a ufc link
  } else if (link.includes("ufc.com")) {
    ufc.getFighter(link, data => {
      fighter.fullname = data.fullname;
      fighter.hometown = data.hometown;
      fighter.location = data.location;
      fighter.height = data.height;
      fighter.height_cm = data.height_cm;
      fighter.weight = data.weight;
      fighter.weight_kg = data.weight_kg;
      fighter.record = data.record;
      fighter.college = data.college;
      fighter.degree = data.degree;
      fighter.summary = data.summary;
      fighter.strikes = data.strikes;
      fighter.takedowns = data.takedowns;

      res.json({
        success: true,
        data: fighter
      });
    });
  } else {
    res.json({
      success: false
    });
  }
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
