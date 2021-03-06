const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

//Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
    });

    User.getUserByUsername(newUser.username, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Something went wrong trying to register. :('
            });
        } else {
            if (user) {
                console.log('A user was found ' + user);
                res.json({
                    success: true,
                    msg: 'This user already exists',
                    userAlreadyExists: true
                });
                return;
            } else {
                User.addUser(newUser, (err, user) => {
                    if (err) {
                        res.json({
                            success: false,
                            msg: 'Something went wrong trying to register. :(',
                            userAlreadyExists: false
                        });
                    } else {
                        res.json({
                            success: true,
                            msg: 'You are now registered and can login!',
                            userAlreadyExists: false
                        });
                    }
                });
            }
        }
    });
});

router.put('/delete', (req, res, next) => {
    console.log(req.body.userId);
    const userId = req.body.userId;

    User.deleteUser(userId, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'failed to delete user'
            });
        } else {
            res.json({
                success: true,
                msg: 'That user is no more!'
            });
        }
    });
});

router.put('/update', (req, res, next) => {
    User.updateUser(req.body, (err, user) => {
        if (err) {
            res.json({
                success: false,
                msg: 'Failed to update user...'
            });
        } else {
            res.json({
                success: true,
                msg: 'Something feels.... different'
            });
        }
    });
});

//Authenticate
router.post('/authenticate', (req, res, next) => {
    //get the username and password
    const username = req.body.username;
    const password = req.body.password;
    //get the user by username
    User.getUserByUsername(username, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({success: false, msg: 'User not found'});
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                //create token, with user, sercet, object with config props
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800 //the user will have to login every X amount of seconds
                });

                res.json({
                    success: true,
                    //send along the token back
                    token: 'JWT '+token,
                    //send the user data back
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                })
            } else {
                return res.json({success: false, msg: 'Username or password is incorrect'});
            }
        })
    });
});

// Used to get user information
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
    res.json({user: req.user});
});

module.exports = router;

