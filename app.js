/**
 * Created by user on 7/15/2017.
 */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('Database error ' + err);
});

const app = express();

const users = require('./routes/users');

// const port = process.env.PORT || 8080;
const port = 3000;

app.use(cors());

//Set static folder
app.use(express.static(path.join(__dirname, 'client')));

// Body parser Middleware
app.use(bodyParser.json());

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users', users);

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname, 'client/index.html'));
});

//start server
app.listen(port, () => {
    console.log("server started on port: " + port);
});

