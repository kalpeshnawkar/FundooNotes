/**
 * Purpose      :Create a Fundoo App for storing notes 
* 
* @description
* 
* @file        :server.js
* @overview    :It is a back  end of Fundoo App Google Keep, create it using node js,express Framework.Server are running on 4000 localhost.
* @author      :Kshiteej Nawkar <knawkar@gmail.com>
* @version     :1.0
* @since       :`04/04/2019  */

const express = require('express');

const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const router = require('./routes/routes');
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()
var redis = require('redis');
var client = redis.createClient();


app.use(bodyParser.urlencoded({ extended: true }))
app.use(expressValidator());
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use('/', router);


mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
client.on('connect', function() {
    console.log('redis server connected');
});


app.get('/', (req, res) => {
    res.json({ "message": "Welcome to chat app." });
});
 

// listen for requests
app.listen(4000, () => {
    console.log("Server is listening on port 4000");
})
module.exports= app

