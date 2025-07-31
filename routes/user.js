const express = require("express");
const User = require("../models/user");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const passport = require("passport");
const {saveRedirectUrl } = require("../midlleware.js");

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
      req.login(registeredUser, (e) => {
        if (e) {
          return next(e);
        }
        req.flash("success", "Registered Successfully!");
        return res.redirect("/listings");
      });
    } catch (e) {
      req.flash("error", e.message);
      res.redirect("/signup");
    }
  })
);

// User Login
router.get("/login", (req, res) => {
  res.render("./users/login.ejs");
});

router.post(
  "/login",saveRedirectUrl,
  passport.authenticate("local", {
    failureFlash: true,
    failureRedirect: "/login",
  }),
  (req, res) => {
    req.flash("success", "Welcome Back to WanderLust");
    let redirectUrl = res.locals.redirectUrl || '/listings'
    res.redirect(redirectUrl);
  }
);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) next(err);
    req.flash("success", "Logged out!");
    res.redirect("/listings");
  });
});

module.exports = router;
