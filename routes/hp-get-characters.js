const express = require("express");
const Character = require("../db/model/hp-characters");
const router = express.Router();

router.get("/", async (req, res) => {
  Character.find()
    .then((characterResult) => {
      res.send(characterResult);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
