const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/reactreadinglist"
// );

const calendarSeed = [
  {
    startDate: { type: String, unique: true, required: true },
    endDate: { type: String, unique: true,required: true },
   
    date: new Date(Date.now())
  }
];

db.Calendar
  .remove({})
  .then(() => db.Calendar.collection.insertMany(calendarSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
