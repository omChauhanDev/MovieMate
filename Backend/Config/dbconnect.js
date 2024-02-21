const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Connetion with Database established"))
    .catch((err) => {
      console.error(err);
      console.error("There was a problem connecting with the DB");
    });
};

module.exports = dbConnect;
