const mongoose = require("mongoose");
const { type, min, max } = require("../schema");

const reviewSchema = new mongoose.Schema({
    comment:{
        type:String
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    reatedAt:{
        type:Date,
        default:Date.now()
    }
})

const Review = mongoose.model('Review',reviewSchema);

module.exports = Review;