require("dotenv").config();
const express = require('express');
const app = express();
const connectToMongoDB = require('./config/mongodb');
const { authenticateToken } = require('./middleware/authMiddleware');
const authRoutes = require('./routes/auth');


app.use(express.json());

connectToMongoDB();


app.use('/auth', authRoutes);

app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'Protected route accessed successfully' });
});


app.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port 3000");
});
