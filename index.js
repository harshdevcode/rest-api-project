const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://admin:efJshTc135G6elPx@cluster0.j0zwdp4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));
  
app.use('/api', userRoutes); // 👈 Mount user routes at /api

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
