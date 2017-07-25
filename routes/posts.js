const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Post = require('../models/post');

//Register
router.post('/add', (req, res, next) => {
    console.log('Request body: ' + req.body.photo.toString());
    let newPost = new Post({
        date: req.body.date,
        title: req.body.title,
        body: req.body.body,
        photo: req.body.photo.toString(),
        tags: req.body.tags,
        recap: req.body.recap,
        milesSinceLastPost: req.body.milesSinceLastPost,
        temperature: req.body.temperature,
        weatherCondition: req.body.weatherCondition,
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
    console.log(req.body.userId);
    const userId = req.body.userId;

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
    res.json({posts: req.posts});
});


// router.get('/all', (req, res, next) => {
//     res.json({posts: req.posts});
// });



module.exports = router;

