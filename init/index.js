const mongoose = require("mongoose");
const initData = require('./data.js');
const Listing = require('../models/listing.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => console.log("Error occured : ", err));


async function main() {
  await mongoose.connect(MONGO_URL);
}

async function initialiseDb(){
await Listing.deleteMany({});
initData.data = initData.data.map((obj)=>({...obj,owner:'6889b6cdfb2e01df351eeae7'}))   // owner:aryxnpawar
await Listing.insertMany(initData.data);
console.log("db initialised");
}

initialiseDb();