const mongoose = require('mongoose');

// User Schema Definition
var userSchema = new mongoose.Schema({
    name: String
});

// User Schema Methods

module.exports = mongoose.model("User", userSchema);
