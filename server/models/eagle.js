var mongoose = require('mongoose');

var EagleSchema = new mongoose.Schema({
  name: {type: String, required: true},
  fly: {type: Boolean, required: true},
  description: {type: String, required: false}
}, {timestamps: true});

var Eagle = mongoose.model('Eagle', EagleSchema);
