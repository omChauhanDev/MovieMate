const nodemailer = require("nodemailer");
require("dotenv").config();
try {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
} catch (err) {
  console.log(err);
  console.log("Something went wrong with the Mailer...");
}

module.exports = transporter;
