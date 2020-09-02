'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var responseSchema = new Schema({
  description: {
    type: String,
    required: true,
    unique: true
  },
  status: {
    type: String,
    required: true
  },
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
  }
});

module.exports = mongoose.model('Response', responseSchema);