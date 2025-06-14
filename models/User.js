const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  age: {
    type: Number,
    required: true
  }
}, {
  timestamps: true // createdAt, updatedAt automatic add hota hai
});

const User = mongoose.model('User', userSchema);

module.exports = User;
