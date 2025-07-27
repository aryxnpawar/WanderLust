const express = require('express')
const router = express.Router()
const Listing = require("../models/listing.js");
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema} = require("../schema.js");

const validateListing = (req, res, next) => {
    const { error } = listingSchema.validate(req.body);
    if (error) {
      const errorMessage = error.details.map((el) => el.message).join(",");
      throw new ExpressError(400, errorMessage);
    } else {
      next();
    }
  };
  
  //Index Route
  router.get(
    "/",
    wrapAsync(async (req, res) => {
      const allListings = await Listing.find();
      res.render("./listings/index.ejs", { allListings });
    })
  );
  
  //Create Route
  router.get("/new", (req, res) => {
    res.render("./listings/new.ejs");
  });
  
  router.post(
    "/",
    validateListing,
    wrapAsync(async (req, res) => {
      const newListing = await Listing.insertOne(req.body.listing);
      console.log(newListing);
      req.flash('success','Added new Listing!')
      res.redirect("/listings");
    })
  );
  
  //Show Route
  router.get(
    "/:id",
    wrapAsync(async (req, res) => {
      const { id } = req.params;
      const listing = await Listing.findById(id).populate("reviews");
      if(!listing){
        req.flash('error','No such Listing!')
        res.redirect("/listings");
      }else{
      res.render("./listings/show.ejs", { listing });
      }
    })
  );
  
  //Edit Route
  router.get(
    "/:id/edit",
    wrapAsync(async (req, res) => {
      const { id } = req.params;
      const listing = await Listing.findById(id);
      if(!listing){
        req.flash('error','No such Listing!')
        res.redirect("/listings");
      }else{
      res.render("./listings/edit.ejs", { listing });
      }
    })
  );
  
  router.put(
    "/:id/edit",
    validateListing,
    wrapAsync(async (req, res) => {
      const { id } = req.params;
      updatedListing = await Listing.findByIdAndUpdate(id, req.body.listing, {
        new: true,
      });
      console.log(updatedListing);
      req.flash('success','Edit Listing Successfully!')
      res.redirect(`/listings/${id}`);
    })
  );
  
  //Delete Route
  router.delete(
    "/:id",
    wrapAsync(async (req, res) => {
      const { id } = req.params;
      const deletedListing = await Listing.findByIdAndDelete(id);
      console.log(deletedListing);
      req.flash('success','Deleted Listing successfully!')
      res.redirect("/listings");
    })
  );
  

  module.exports = router;