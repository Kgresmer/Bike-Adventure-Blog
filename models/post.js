const mongoose = require('mongoose');

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
       type: [String]
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
