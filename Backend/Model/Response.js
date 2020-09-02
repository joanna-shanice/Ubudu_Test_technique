'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var responseSchema = new Schema({
  description: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Response', responseSchema);