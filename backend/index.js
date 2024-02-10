const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const auth = require("./auth/google");
const mongoose = require("mongoose");

const crypto = require("crypto");

const uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then((conn) => {
    console.log("CONNECTED!");
  })
  .catch((err) => {
    console.log(err);
  });

// Generate a random string of a given length
const generateRandomString = (length) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
};

// Use the generated string as your session secret
const sessionSecret = generateRandomString(64);

app.use(
  session({ secret: sessionSecret, resave: false, saveUninitialized: false }),
);
app.use(passport.initialize());
app.use(passport.session());

function ensureAuthenticated(req, res, next) {
  if (req.user) {
    return next();
  }
  res.sendStatus(401);
}

app.use(bodyParser.json());
app.use(cors());
const port = 5050;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use("/auth", auth.router);

app.get("/test", ensureAuthenticated, (req, res) => {
  const link = req.user.image;
  res.send(`<img src= ${link} />`);
  // res.json(req.user);
});

app.get("/logout", (req, res) => {
  req.logout(req.user, (err) => {
    if (err) {
      return res.send("Error logging out");
    }
  });
  // req.session.destroy();
  res.send("Goodbye!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
