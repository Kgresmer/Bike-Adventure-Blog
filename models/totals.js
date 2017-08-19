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

// TODO clear totals

module.exports.addToTotals = function (dataToAdd, callback) {
    Totals.find(function (err, results) {
        if (err) {
            throw err;
        }
        console.log('results: ' + results);
        if (!results || results.length < 1) {
            let totals = new Totals({
                totalMilesBiked: dataToAdd.milesSinceLastPost,
                totalTimeBiked: dataToAdd.timeBikedToday
            });
            console.log('totals: ' + totals);
            totals.save(callback);
        } else {
            results[0].totalMilesBiked += dataToAdd.milesSinceLastPost;
            results[0].totalTimeBiked += dataToAdd.timeBikedToday;
            console.log('results after changes: ' + results);
            results[0].save(callback);
        }
    });
};
