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
    photos:  {
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
    timeBikedToday: {
       type: Number
    },
    temperature: {
       type: Number
    },
    weatherCondition: {
       type: ['Cloudy', 'Partly Cloudy', 'Overcast', 'Sunny', 'Rainy']
    },
    author: {
       type: String
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
    console.log('new post %j', newPost);
    newPost.save(callback);
};

module.exports.editPost = function (newPostData, callback) {
    Post.findById(newPostData._id, function (err, existingPostData) {
        // Handle any possible database errors
        if (typeof existingPostData === 'undefined') {
            return "No record found to update.";
        }
        existingPostData.date = newPostData.date || existingPostData.date;
        existingPostData.title = newPostData.title || existingPostData.title;
        existingPostData.body = newPostData.body || existingPostData.body;
        existingPostData.photos = newPostData.photos || existingPostData.photos;
        existingPostData.tags = newPostData.tags || existingPostData.tags;
        existingPostData.recap = newPostData.recap || existingPostData.recap;
        existingPostData.timeBikedToday = newPostData.timeBikedToday || existingPostData.timeBikedToday;
        existingPostData.milesSinceLastPost = newPostData.milesSinceLastPost || existingPostData.milesSinceLastPost;
        existingPostData.temperature = newPostData.temperature || existingPostData.temperature;
        existingPostData.weatherCondition = newPostData.weatherCondition || existingPostData.weatherCondition;
        existingPostData.author = newPostData.author || existingPostData.author;

        // Save the updated document back to the database
        existingPostData.save(callback);
    });
};

module.exports.deletePost = function(postId, callback) {
    console.log('deleting post: ' + postId);
    Post.findByIdAndRemove(postId, callback);
};
