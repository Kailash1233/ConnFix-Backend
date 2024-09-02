const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  linkedinId: {
    type: String,
    required: true,
    unique: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  connections: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
