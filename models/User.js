const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  experience: { type: String },  // Adjust type as needed
  password: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
