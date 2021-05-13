const express = require("express");
const Character = require("../db/model/hp-characters");
const router = express.Router();

router.get("/:houseName", async (req, res) => {
  const { houseName } = req.params;
  Character.find({ house: houseName })
    .then((characterResult) => {
      res.send(characterResult);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
