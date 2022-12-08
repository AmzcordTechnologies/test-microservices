const mongoose = require('mongoose');
const { Schema } = mongoose;

var cat = mongoose.Schema({
    name: String,
    age: Number
});

var Model = mongoose.model("model", cat, "myCollection");