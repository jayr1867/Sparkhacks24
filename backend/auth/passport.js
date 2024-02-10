require("dotenv").config();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const User = require("../model/uModel");

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      // callbackURL: "http://localhost:5050/auth/google/callback",
      callbackURL: "https://aahar-server.onrender.com/auth/google/callback",
    },
    function (request, accessToken, refreshToken, profile, cb) {
      // User.findOrCreate({ googleId: profile.id }, function (err, user) {
      //   return cb(err, user);
      // });

      // user.plugin(findOrCreate);

      User.findOrCreate(
        {
          googleID: profile.id,
          email: profile.emails[0].value,
          displayName: profile.displayName,
          image: profile.photos[0].value,
        },
        function (err, user) {
          return cb(err, user);
        }
      );
      // console.log(profile);
      // return cb(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = passport;
