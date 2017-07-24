const express = require('express');
const router = express.Router();
const config = require('../config/database');

//Register
router.post('/register', (req, res, next) => {
    let newPost = new Post({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
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

