require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}?retryWrites=true&w=majority&appName=Cluster0`)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use('/api', userRoutes); // 👈 Mount user routes at /api

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
