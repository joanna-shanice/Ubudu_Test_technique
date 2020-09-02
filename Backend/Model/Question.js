'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var questionSchema = new Schema({
  description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Question', questionSchema);