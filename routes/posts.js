const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Post = require('../models/post');
const AWS = require('aws-sdk');
const multer = require('multer');
const schedule = require('node-schedule');
const Totals = require('../models/totals');
const path = require('path');
const fs = require('file-system');

let dailyPhotoNumber = 1;
let tempFileName = 'hasnt been set yet';


const s3 = new AWS.S3({
    accessKeyId: process.env.accessKeyId,
    secretAccessKey: process.env.secretAccessKey,
    region: process.env.region
});
const bucketParams = {Bucket: 'blog-post-photos'};
// s3.createBucket(bucketParams);
const s3Bucket = new AWS.S3({params: bucketParams});

function getDailyPhotoNumber() {
    return dailyPhotoNumber++;
}

schedule.scheduleJob('0 0 * * *', function () {
    dailyPhotoNumber = 1;
});

var storage = multer.diskStorage({ //multers disk storage settings
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        var datetimestamp = new Date();
        tempFileName = file.originalname.split('.')[0] + '-' + datetimestamp.toDateString().substr(4).replace(/ /g, '-') + '-' + getDailyPhotoNumber() + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1];
        cb(null, tempFileName);
    }
});

var upload = multer({ //multer settings
    storage: storage
}).single('file');

router.post('/upload', function (req, res) {

    upload(req, res, function (err) {
        if (err) {
            res.json({error_code: 1, err_desc: err});
            return;
        } else {
            let filePath = './uploads/' + tempFileName;
            fs.readFile(filePath, function (err, data) {
                if (err) throw err; // Something went wrong!
                var params = {
                    Key: tempFileName, //file.name doesn't exist as a property
                    Body: data
                };
                s3Bucket.putObject(params, function (err, data) {
                    // Whether there is an error or not, delete the temp file
                    fs.unlink(filePath, function (err) {
                        if (err) {
                            console.error(err);
                        }
                        console.log('Temp File Delete');
                    });

                    console.log("PRINT FILE:", tempFileName);
                    if (err) {
                        console.log('ERROR MSG: ', err);
                    } else {
                        console.log('Successfully uploaded data');
                    }
                });
            });
        }
        res.json({error_code: 0, err_desc: null, fileName: tempFileName});
    });
});

router.put('/photo/delete', function (req, res) {
    const params = {Bucket: 'blog-post-photos', Key: req.body.photo};
    s3.deleteObject(params, (err, data) => {
        if (err) {
            res.send({success: false, msg: err});
        } else {
            res.send({success: true, msg: data});
        }
    });
});

//Register
router.post('/add', (req, res, next) => {
    const newPost = new Post({
        date: req.body.date,
        title: req.body.title,
        body: req.body.body,
        comments: req.body.comments,
        layout: req.body.layout,
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
    console.log('post id to delete ' + req.body.postId);
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
                msg: 'Oh no something went wrong. Bloggy Blog Blog could not edit post. ' + err
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

// router.get('/uploads/:image', (req, res) => {
//     let url = 'uploads/' + req.params.image;
//     console.log(url);
//     res.sendFile(path.resolve(url));
// });
router.get('/uploads/all', (req, res) => {
    s3.listObjects(bucketParams, function (err, data) {
        if (err) {
            res.send({success: false, error: err});
        }
        res.send({success: true, photos: data.Contents});
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

router.get('/filterByTag', (req, res, next) => {
    Post.getPostsByTag(req.query.tag, function (err, results) {
        if (err) {
            res.send({success: false, mes: err});
        }
        if (!results) {
            res.send({success: false, mes: "no results found"});
        }
        res.send({success: true, posts: results});
    });
});

router.get('/filterByDate', (req, res, next) => {
    Post.getPostsByDate(req.query.date, function (err, results) {
        if (err) {
            res.send({success: false, mes: err});
        }
        if (!results) {
            res.send({success: false, mes: "no results found"});
        }
        res.send({success: true, posts: results});
    });
});

router.get('/id', (req, res) => {
    Post.getPostById(req.query.id, function (err, results) {
        if (err) {
            res.send({success: false, mes: err});
        }
        if (!results) {
            res.send({success: false, mes: "no results found"});
        }
        res.send({success: true, post: results});
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

