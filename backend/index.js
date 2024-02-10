const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const auth = require("./auth/google");
const mongoose = require("mongoose");

const crypto = require("crypto");
const UserModel = require("./model/uModel");
const ObjectId = require("mongoose").Types.ObjectId;

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
  // const link = req.user.image;
  // res.send(`<img src= ${link} />`);
  res.redirect("https://aahar-52pn.onrender.com/User");
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

app.get("/img", ensureAuthenticated, (req, res) => {
  res.json({ img: req.user.image });
});

app.get("/mydonations", ensureAuthenticated, (req, res) => {
  res.json({ donations: req.user.donations });
});

app.get("/alldonations", ensureAuthenticated, async (req, res) => {
  const unclaimedDonations = await UserModel.aggregate([
    { $unwind: '$donations' },
    { $match: { 'donations.isClaimed': false } }
  ]);

// console.log(unclaimedDonations);
  res.json({ donations: unclaimedDonations.map((user) => user.donations)});
  // res.json({ message: "All donations" });
});

app.post("/donate", ensureAuthenticated, async (req, res) => {
  const { serving, expiration, pickupAddress, pickupCity, pickupContact } =
    req.body;
  const donationID = new ObjectId().toString();
  const expirationDate = new Date(expiration);
  const newDonation = {
    donationID,
    serving,
    expiration: expirationDate,
    pickupAddress,
    pickupCity,
    pickupContact,
  };
  const user = await UserModel.findOne({ googleID: req.user.googleID });
  user.donations.push(newDonation);
  await user.save();
  res.json({ message: "Donation added" });
});


app.post("/claim", ensureAuthenticated, async (req, res) => {
  const { donationID } = req.body;
  const user = await UserModel.findOne({ googleID: req.user.googleID });
  const donation = user.donations.find((d) => d.donationID === donationID);
  donation.isClaimed = true;
  await user.save();
  res.json({ message: "Donation claimed" });
});


app.post("/userUpdate", ensureAuthenticated, async (req, res) => {
  const { address, city, contact, isDonor } = req.body;
  const user = await UserModel.findOne({ googleID: req.user.googleID });
  user.address = address;
  user.city = city;
  user.contact = contact;
  user.isDonor = isDonor;
  await user.save();
  res.json({ message: "User updated" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
