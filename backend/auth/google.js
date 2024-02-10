const passport = require("./passport");
const router = require("express").Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/test",
    failureRedirect: "/failure",
  }),
);

router.get("/failure", (req, res) => {
  res.json({ message: "failure" });
});

module.exports = { router };
