const mongoose = require('mongoose')

const userScheme = mongoose.Schema({
    name: String,
    age: Number,
    city: String,
    country: String,
});

module.exports = mongoose.model("user", userScheme)