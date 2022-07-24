const express = require("express");
const mongoose = require("mongoose");

let User = require("./models/user.model");

require("dotenv").config();

const app = express();

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection succesful");
});

app.get("/", (req, res) => {
  User.find({
    birthdayMonth: req.query.month,
    birthdayDay: req.query.day,
  })
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.post("/", (req, res) => {
  const username = req.body.username;
  const name = req.body.name;
  const surname = req.body.surname;
  const birthdayDay = req.body.birthdayDay;
  const birthdayMonth = req.body.birthdayMonth;
  const birthdayYear = req.body.birthdayYear;
  const contact = req.body.contact;

  const newUser = new User({
    username,
    name,
    surname,
    birthdayDay,
    birthdayMonth,
    birthdayYear,
    contact,
  });

  newUser
    .save()
    .then(() => res.json("Created!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json("Error: " + err));
});

app.listen(5000, () => {
  console.log(`Server is running on port 5000`);
});
