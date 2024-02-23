const express = require('express');
const router = express.Router();

const { imageUpload } = require("../Controllers/fileUpload.js");

router.post("/image", imageUpload);

module.exports = router;