// const express = require("express");
// const mongoose = require("mongoose");
// const router = express.Router();
// const authRoutes = require('./auth');


// const userSchema = new mongoose.Schema({
//   name: String,
//   age: Number,
// });

// const userModel = mongoose.model("users", userSchema);

// router.get("", (req, res) => {
//   res.send("Hello, world!");
//   console.log('ahmed shehata');
// })

// router.get("/users", async (req, res) => {
//   console.log('hereeeeeeeee');
//   try {
//     const users = await userModel.find({});
//     res.json(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });


// // Authentication routes
// router.use('/auth', authRoutes);

// module.exports = router;