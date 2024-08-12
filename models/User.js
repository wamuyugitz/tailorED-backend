const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  institution: { type: String },
  role: { type: String, required: true }, // Added role field
  county: { type: String }, // Added county field
  grade: { type: String }, // Added grade field
});

module.exports = mongoose.model("User", userSchema);
