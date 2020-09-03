'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var participationSchema = new Schema({
  score: {
    type: Number,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  log: [Schema.Types.Mixed],
}, {
    timestamps: true
});

module.exports = mongoose.model('Participation', participationSchema);