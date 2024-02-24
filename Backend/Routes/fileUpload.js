const express = require("express");
const router = express.Router();
const auth = require("../Middleware/auth.js");

const { imageUpload, imageDelete } = require("../Controllers/fileUpload.js");

router.post("/imageUpload", auth, imageUpload);
router.post("/imageDelete", auth, imageDelete);
module.exports = router;
