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

module.exports.addToTotals = function (dataToAdd, callback) {
    console.log('entered add to totals method ' + dataToAdd);

    Totals.find(function (err, results) {
        if (err) {
            throw err;
        }
        if (!results || results.length < 1) {
            let totals = new Totals({
                totalMilesBiked: dataToAdd.milesSinceLastPost,
                totalTimeBiked: dataToAdd.timeBikedToday
            });
            totals.save(callback);
        } else {
            console.log(results);
            console.log(results[0]);
            results[0].totalMilesBiked += dataToAdd.milesSinceLastPost;
            results[0].totalTimeBiked += dataToAdd.timeBikedToday;
            results[0].save(callback);
        }
    });
};
