// Load required packages
var mongoose = require('mongoose');

module.exports = mongoose.model('Article', {
     text : String,
     done : Boolean
 });
