const mongoose = require('mongoose');
const express = require("express");
const grid = require('gridfs-stream');
const config = require('../config/database');
const fs = require('file-system');
const multer = require("multer");

var app = express();
var upload = multer({dest: "./uploads"});

mongoose.connect(config.database);
const conn = mongoose.connection;
let gfs;
grid.mongo = mongoose.mongo;

// https://dinosaurscode.xyz/nodejs/2016/04/12/how-to-upload-images-to-mongodb-using-express/

const PostSchema = mongoose.Schema({
   date: {
       type: Date,
       required: true
   },
    title: {
       type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    photo:  {
       data: Buffer,
       contentType: String
    },
    tags: {
       type: [String]
    },
    recap: {
       type: Boolean
    },
    milesSinceLastPost: {
       type: Number
    },
    temperature: {
       type: Number
    },
    weatherCondition: {
       type: ['Cloudy', 'Partly Cloudy', 'Overcast', 'Sunny', 'Rainy']
    }
});

const Post = module.exports = mongoose.model('Post', PostSchema);

module.exports.getPostById = function (id, callback) {
  Post.findById(id, callback);
};
module.exports.getPostByDate = function (date, callback) {
    const query = {date: date};
    Post.find(query, callback);
};

module.exports.addPost = function (newPost, callback) {
    console.log('Photo to read file sync: ' + newPost.photo);
    console.log('Photo type: ' + typeof newPost.photo);
    newPost.photo = {
        data: fs.readFileSync(newPost.photo),
        contentType: 'image/png'
    };
    newPost.save(callback);
};

module.exports.editPost = function (newPostData, callback) {
    Post.findById(newPostData._id, function (err, existingPostData) {
        // Handle any possible database errors
        existingPostData.name = newPostData.name || existingPostData.name;
        existingPostData.email = newPostData.email || existingPostData.email;
        existingPostData.username = newPostData.username || existingPostData.username;
        existingPostData.password = newPostData.password || existingPostData.password;

        // Save the updated document back to the database
        existingPostData.save(callback);
    });
};

module.exports.deletePost = function(postId, callback) {
    console.log('deleting post: ' + postId);
    Post.findByIdAndRemove(postId, callback);
};
