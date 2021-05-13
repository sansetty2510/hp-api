const express = require("express");
const app = express();
const mongoose = require("mongoose");
var morgan = require("morgan");
const hpCharacters = require("./routes/hp-get-characters");
const hpStudents = require("./routes/hp-get-students");
const hpStaff = require("./routes/hp-get-staff");
const hpCharactersByHouse = require("./routes/hp-get-by-house");

app.use(morgan("tiny"));

app.use(express.urlencoded({ extended: true }));

app.use("/characters", hpCharacters);
app.use("/characters/students", hpStudents);
app.use("/characters/staff", hpStaff);
app.use("/characters/house", hpCharactersByHouse);

const port = 3000;

mongoose
  .connect("mongodb://localhost:27017/harry-potter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    app.listen(port);
    console.log(`Sever is running at port ${port}`);
  })
  .catch((err) => console.log(err));
