const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const config = require('./Config')

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

require('./Route/User')(app)
require('./Route/Questions')(app)

mongoose.Promise = global.Promise;

mongoose.connect(config.url,  { useNewUrlParser: true }, function(err) {
    if (err) throw err;
    console.log('Successfully connected to Database')
})

app.get('/', (req, res) => {
    res.json({"message": "Welcome"});
});


// listen for requests
app.listen(config.Port, () => {
    console.log("Server is listening on port " + config.Port);
});