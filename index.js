const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const path = require("path");
const Listing = require("./models/listing.js");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");
const Review = require("./models/review.js");

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

const validateListing = (req, res, next) => {
  const { error } = listingSchema.validate(req.body);
  if (error) {
    const errorMessage = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errorMessage);
  } else {
    next();
  }
};

const validateReview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body);
  if (error) {
    throw new ExpressError(400, error.message);
  } else {
    next();
  }
};

//Index Route
app.get(
  "/listing",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find();
    res.render("./listings/index.ejs", { allListings });
  })
);

//Create Route
app.get("/listing/new", (req, res) => {
  res.render("./listings/new.ejs");
});

app.post(
  "/listing",
  validateListing,
  wrapAsync(async (req, res) => {
    console.log(result);
    const newListing = await Listing.insertOne(req.body.listing);
    console.log(newListing);
    res.redirect("/listing");
  })
);

//Show Route
app.get(
  "/listing/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("./listings/show.ejs", { listing });
  })
);

//Edit Route
app.get(
  "/listing/:id/edit",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit.ejs", { listing });
  })
);

app.put(
  "/listing/:id/edit",
  validateListing,
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    updatedListing = await Listing.findByIdAndUpdate(id, req.body.listing, {
      new: true,
    });
    console.log(updatedListing);
    res.redirect(`/listing/${id}`);
  })
);

//Delete Route
app.delete(
  "/listing/:id",
  wrapAsync(async (req, res) => {
    const { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listing");
  })
);

//Review
//Post Review
app.post(
  "/listing/:id/reviews",
  validateReview,
  wrapAsync(async (req, res, next) => {
    const { id } = req.params;

    let newReview = await Review.insertOne(req.body.review);
    let listing = await Listing.findById(id);
    listing.reviews.push(newReview);
    let result = await listing.save();
    res.redirect(`/listing/${id}`);
  })
);

//Delete Review
app.delete(
  '/listing/:id/reviews/:reviewId',
  wrapAsync(async (req, res, next) => {
    const {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listing/${id}`)
  })
);

app.use((req, res, next) => {
  next(new ExpressError(404, "Page not Found"));
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something Went Wrong!" } = err;
  res.status(status).render("error.ejs", { err, status });
});
