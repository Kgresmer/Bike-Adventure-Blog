const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

//User Schema
const UserSchema = mongoose.Schema({
   name: {
       type: String
   },
    email: {
       type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function (id, callback) {
  User.findById(id, callback);
};
module.exports.getUserByUsername = function (username, callback) {
    const query = {username: username};
    User.findOne(query, callback);
};

module.exports.addUser = function (newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    });
};

module.exports.updateUser = function (newUserData, callback) {
    const updatedUser = {};

    User.findById(newUserData.id, function (err, existingUserData) {
        // Handle any possible database errors
        if (err) throw err;
        updatedUser.name = newUserData.name || existingUserData.name;
        updatedUser.email = newUserData.email || existingUserData.email;
        updatedUser.username = newUserData.username || existingUserData.username;
        updatedUser.password = newUserData.password || existingUserData.password;

        // Save the updated document back to the database
        updatedUser.save(callback);
    });
};

module.exports.deleteUser = function(userId, callback) {
    User.findByIdAndRemove(userId, callback);
};

module.exports.comparePassword = function (candidatePassword, hashedPassword, callback) {
    bcrypt.compare(candidatePassword, hashedPassword, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
};