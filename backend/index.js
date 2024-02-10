const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
require("./auth");

const crypto = require("crypto");

// Generate a random string of a given length
const generateRandomString = (length) => {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
};

// Use the generated string as your session secret
const sessionSecret = generateRandomString(32);

app.use(
  session({ secret: sessionSecret, resave: false, saveUninitialized: true }),
);
app.use(passport.initialize());
app.use(passport.session());

function ensureAuthenticated(req, res, next) {
  if (req.user) {
    return next();
  }
  res.send(401);
}

app.use(bodyParser.json());
app.use(cors());
const port = 5050;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/test",
    failureRedirect: "auth/failure",
  }),
);

app.get("/auth/failure", (req, res) => {
  res.json({ message: "failure" });
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

app.get("/test", ensureAuthenticated, (req, res) => {
  res.json({ message: "Test" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
