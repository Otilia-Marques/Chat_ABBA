const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true
    },
    username: {
        type: String,
        unique: true
    },
    password: String
});

mongoose.model('User', UserSchema);