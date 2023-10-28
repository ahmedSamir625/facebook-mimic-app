require("dotenv").config();
const express = require("express");
const app = express();
const connectToMongoDB = require("./config/mongodb");
const authRoutes = require("./routes/auth");

app.use(express.json());

connectToMongoDB();

app.use("/auth", authRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port 3000");
});
