const mongoose = require('mongoose');
require('dotenv').config(); // Ensure dotenv is loaded

const mongoUri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    if (!mongoUri) {
      throw new Error('MONGODB_URI is not defined');
    }
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Optional settings:
      // useCreateIndex: true,
      // useFindAndModify: false,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
