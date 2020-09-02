'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var questionSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  response: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Response'
    }
  ]
});

module.exports = mongoose.model('Question', questionSchema);