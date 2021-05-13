const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  species: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  house: {
    type: String,
    require: true,
  },
  dateOfBirth: {
    type: String,
    require: true,
  },
  yearOfBirth: {
    type: Number,
    require: true,
  },
  ancestry: {
    type: String,
    require: true,
  },
  eyeColour: {
    type: String,
    require: true,
  },
  hairColour: {
    type: String,
    require: true,
  },
  wand: {
    wood: {
      type: String,
      require: true,
    },
    core: {
      type: String,
      require: true,
    },
    length: {
      type: Number,
      require: true,
    },
  },
  patronus: {
    type: String,
    require: true,
  },
  hogwartsStudent: {
    type: Boolean,
    require: true,
  },
  hogwartsStaff: {
    type: Boolean,
    require: true,
  },
  actor: {
    type: String,
    require: true,
  },
  alive: {
    type: Boolean,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});

const Character = mongoose.model("character", characterSchema);

module.exports = Character;
