const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("DB is ready to serve..."));
module.exports = dbConnect;
