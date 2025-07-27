const express = require("express");
const app = express();
const port = 3000;
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(port, () => {
  console.log("listening on port", port);
});
app.use(
  session({ secret: "privateKey", resave: true, saveUninitialized: true })
);
app.use(flash());

app.get("/register", (req, res) => {
  const { userName = "anonymous" } = req.query;
  req.session.userName = userName;
  if (userName === "anonymous")
    req.flash("regStatus", "user was NOT registered");
  else {
    req.flash("regStatus", "user was registered");
  }

  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
    res.locals.regStatusMsg=req.flash("regStatus")
  res.render("page.ejs", { name: req.session.userName });
});
