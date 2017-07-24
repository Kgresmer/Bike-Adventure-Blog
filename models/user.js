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
    User.findById(newUserData._id, function (err, existingUserData) {
        // Handle any possible database errors
        existingUserData.name = newUserData.name || existingUserData.name;
        existingUserData.email = newUserData.email || existingUserData.email;
        existingUserData.username = newUserData.username || existingUserData.username;
        existingUserData.password = newUserData.password || existingUserData.password;

        // Save the updated document back to the database
        existingUserData.save(callback);
    });
};

module.exports.deleteUser = function(userId, callback) {
    console.log('deleting user: ' + userId);
    User.findByIdAndRemove(userId, callback);
};

module.exports.comparePassword = function (candidatePassword, hashedPassword, callback) {
    bcrypt.compare(candidatePassword, hashedPassword, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
};