const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Post = require('../models/post');
const multer = require('multer');
const schedule = require('node-schedule');
const Totals = require('../models/totals');

let dailyPhotoNumber = 1;
let tempFileName = 'hasnt been set yet';

function getDailyPhotoNumber() {
    return dailyPhotoNumber++;
}

schedule.scheduleJob('0 0 * * *', function(){
    dailyPhotoNumber = 1;
});

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './angular-src/src/assets/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = new Date();
        tempFileName = file.fieldname + '-' + datetimestamp.toDateString().substr(4).replace(/ /g, '-') + '-' + getDailyPhotoNumber() + '.' + file.originalname.split('.')[file.originalname.split('.').length -1];
        cb(null, tempFileName);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

router.post('/upload', function(req, res) {
    upload(req,res,function(err){
        if(err){
            res.json({error_code:1,err_desc:err});
            return;
        }
        res.json({error_code:0,err_desc:null, fileName: tempFileName});
    });
});

//Register
router.post('/add', (req, res, next) => {
    console.log('Request body: %j', req.body);
    let newPost = new Post({
        date: req.body.date,
        title: req.body.title,
        body: req.body.body,
        photos: req.body.photos,
        tags: req.body.tags,
        recap: req.body.recap,
        timeBikedToday: req.body.timeBikedToday,
        milesSinceLastPost: req.body.milesSinceLastPost,
        temperature: req.body.temperature,
        weatherCondition: req.body.weatherCondition,
        author: req.body.author
    });

    Post.addPost(newPost, (err, post) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Something went wrong trying to create this post. :(',
                userAlreadyExists: false
            });
        } else {
            res.json({
                success: true,
                msg: 'You successfully added a post! Now go bike 50 miles.',
                userAlreadyExists: false
            });
        }
    });
});

router.put('/delete', (req, res, next) => {
    console.log(req.body.postId);
    const postId = req.body.postId;

    Post.deletePost(postId, (err, post) => {
        if (err) {
            res.json({
                success: false,
                msg: 'You have Failed!!! to delete this post. '
            });
        } else {
            res.json({
                success: true,
                msg: 'Goodbye Post :('
            });
        }
    });
});

router.put('/edit', (req, res, next) => {
    Post.editPost(req.body, (err, post) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Oh no something went wrong. Bloggy Blog Blog could not edit post.'
            });
        } else {
            res.json({
                success: true,
                msg: 'I hope you made the right choice.'
            });
        }
    });
});

router.get('/all', (req, res, next) => {
    Post.find(function (err, results) {
        if (err) {
            throw err;
        }
        if (!results) {
            res.send("no results found");
        }

        //invoke callback with your mongoose returned result
        res.send({success: true, posts: results});
    });
});

router.get('/totals', (req, res, next) => {
    Totals.find(function (err, results) {
        if (err) {
            throw err;
        }
        if (!results) {
            res.send("no results found");
        }

        //invoke callback with your mongoose returned result
        res.send({success: true, totals: results[0]});
    });
});

router.put('/addToTotals', (req, res, next) => {
    Totals.addToTotals(req.body, (err, totals) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Something went wrong when trying to add to the total time and miles.'
            });
        } else {
            res.json({
                success: true,
                msg: 'That is all you biked today... Fine I will add it on. You are at ' + totals.totalDistance + ' miles for the trip.'
            });
        }
    });
});



module.exports = router;

