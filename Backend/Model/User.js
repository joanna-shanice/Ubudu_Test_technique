'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  participation: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Participation'
    }
  ]
});

module.exports = mongoose.model('User', userSchema);