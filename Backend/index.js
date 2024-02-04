const express = require("express");
const app = express;
require("dotenv").config();
const dbConnect = require("./Config/dbconnect");
const apiv1Router = require("./Routes/index");
const PORT = process.env.PORT || 3000;
app.use("/api/v1", apiv1Router);
app.listen(PORT, () => console.log("Backend's up and running"));
dbConnect();
