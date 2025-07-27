const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const flash = require("connect-flash");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");

const port = 8080;

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.engine("ejs", ejsMate);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));

const sessionOptions = {
  resave: true,
  saveUninitialized: true,
  secret: "privateKey",
  cookie: {
    maxAge: 7 * 24 * 60 * 60 * 1000, //7 days in milliseconds
    httpOnly: true,
  },
};

app.use(session(sessionOptions));
app.use(flash())

main()
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => console.log("Error occured : ", err));

async function main() {
  await mongoose.connect(MONGO_URL);
}

app.listen(port, () => {
  console.log("listening on port :", port);
});

app.get("/", (req, res) => {
  res.send("Working");
});

app.use((req,res,next)=>{
  res.locals.success=req.flash('success')
  next()
})

app.use("/listings", listings);
app.use("/listings/:id/reviews", reviews);

app.use((req, res, next) => {
  next(new ExpressError(404, "Page not Found"));
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something Went Wrong!" } = err;
  res.status(status).render("error.ejs", { err, status });
});
