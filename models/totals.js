const mongoose = require('mongoose');

const TotalsSchema = mongoose.Schema({
    totalMilesBiked: {
       type: Number
    },
    totalTimeBiked: {
       type: Number
    }
});

const Totals = module.exports = mongoose.model('Totals', TotalsSchema);

module.exports.getPostById = function (id, callback) {
    Totals.findById(id, callback);
};
module.exports.getPostByDate = function (date, callback) {
    const query = {date: date};
    Totals.find(query, callback);
};

module.exports.addToTotal = function (dataToAdd, callback) {
    // TODO add totals schema and stuff
    Totals.findById(newPostData._id, function (err, existingPostData) {
        // Handle any possible database errors
        existingPostData.date = newPostData.date || existingPostData.date;
        existingPostData.title = newPostData.title || existingPostData.title;


        // Save the updated document back to the database
        existingPostData.save(callback);
    });
};
