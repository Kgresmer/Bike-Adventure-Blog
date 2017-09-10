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
    comments: {
       type : Array ,
        "default" : [],
        required: false
    },
    body: {
        type: String,
        required: true
    },
    layout: {
        type: String,
        required: true
    },
    photos:  {
       type: [String]
    },
    tags: {
       type: String
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

module.exports.getPostsByTag = function (tag, callback) {
    Post.find(
        {tags: new RegExp(tag, "i")},
        callback);
};

module.exports.getPostsByDate = function (date, callback) {
    let dateSegments = date.split('-');
    console.log(dateSegments);
    let searchDate = new Date(dateSegments[0],
        dateSegments[1]-1,
        dateSegments[2],
        -7, 0, 0);
    let endOfSearchDate = new Date(searchDate.getFullYear(),
        searchDate.getMonth(),
        searchDate.getDate() + 1,
        searchDate.getHours(),
        searchDate.getMinutes(),
        searchDate.getSeconds() - 1);
    console.log('search date' + searchDate.toISOString());
    console.log('endOfSearchDate ' + endOfSearchDate.toISOString());
    Post.find({date: {"$gte": searchDate, "$lt": endOfSearchDate}}, callback);
};

module.exports.addPost = function (newPost, callback) {
    newPost.save(callback);
};

module.exports.editPost = function (newPostData, callback) {
    Post.findById(newPostData._id, function (err, existingPostData) {
        // Handle any possible database errors
        if (typeof existingPostData === 'undefined') {
            return "No record found to update.";
        }


        existingPostData.title = newPostData.title || existingPostData.title;
        existingPostData.comments = newPostData.comments || existingPostData.comments;
        existingPostData.body = newPostData.body || existingPostData.body;
        existingPostData.photos = newPostData.photos || existingPostData.photos;
        existingPostData.tags = newPostData.tags || existingPostData.tags;
        existingPostData.layout = newPostData.layout || existingPostData.layout;
        existingPostData.recap = newPostData.recap || existingPostData.recap;
        existingPostData.timeBikedToday = newPostData.timeBikedToday || existingPostData.timeBikedToday;
        existingPostData.milesSinceLastPost = newPostData.milesSinceLastPost || existingPostData.milesSinceLastPost;
        existingPostData.temperature = newPostData.temperature || existingPostData.temperature;
        existingPostData.author = newPostData.author || existingPostData.author;
        if (newPostData.comments.length === existingPostData.comments.length) {
            existingPostData.date = newPostData.date || existingPostData.date;
            existingPostData.weatherCondition = newPostData.weatherCondition || existingPostData.weatherCondition;
        }

        // Save the updated document back to the database
        existingPostData.save(callback);
    });
};

module.exports.deletePost = function(postId, callback) {
    console.log('deleting post: ' + postId);
    Post.findByIdAndRemove(postId, callback);
};
