const express = require("express");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const passport = require("passport");

const router = express.Router();

// User signup
router.get("/signup", (req, res) => {
  res.render("./users/signup.ejs");
});

router.post(
  "/signup",
  wrapAsync(async (req, res) => {
    const { username, email, password } = req.body;
    let newUser = new User({ username: username, email: email });
    try {
      let registeredUser = await User.register(newUser, password);
      console.log(registeredUser);
      req.flash("success", "Registered Successfully!");
      res.redirect("/listings");
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/users/signup");
    }
  })
);

// User Login
router.get("/login", (req, res) => {
  res.render("./users/login.ejs");
});

router.post(
  "/login",
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/users/login"
  }),
  (req, res) => {
    req.flash('success','Welcome Back to WanderLust');
    res.redirect('/listings')
  }
);

module.exports = router;
