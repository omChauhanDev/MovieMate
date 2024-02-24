const express = require("express");
const cors = require("cors");
const { app } = require("./Config/socket");
const { server } = require("./Config/socket");
require("dotenv").config();
const dbConnect = require("./Config/dbconnect");
const apiv1Router = require("./Routes/index");
const errorCatching = require("./Middleware/errorCatching");
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.use("/api/v1", apiv1Router);
app.get("/", (req, res) => {
  res.status(200).json({ message: "The backend is up and running" });
});
// app.use(errorCatching);
server.listen(PORT, () => console.log(`Backend is running @${PORT}`));
dbConnect();
