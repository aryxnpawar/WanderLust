const express = require('express')
const router = express.Router({mergeParams:true})
const Listing = require("../models/listing.js");
const {reviewSchema } = require("../schema.js");
const wrapAsync = require("../utils/wrapAsync.js");
const Review = require("../models/review.js");

const validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
      throw new ExpressError(400, error.message);
    } else {
      next();
    }
  }

//Review
//Post Review
router.post(
    "/",
    validateReview,
    wrapAsync(async (req, res, next) => {
      const { id } = req.params;
  
      let newReview = await Review.insertOne(req.body.review);
      let listing = await Listing.findById(id);
      listing.reviews.push(newReview);
      let result = await listing.save();
      res.redirect(`/listings/${id}`);
    })
  );
  
  //Delete Review
  router.delete(
    '/:reviewId',
    wrapAsync(async (req, res, next) => {
      const {id,reviewId} = req.params;
      await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}})
      await Review.findByIdAndDelete(reviewId);
  
      res.redirect(`/listings/${id}`)
    })
  );
  
  module.exports=router;