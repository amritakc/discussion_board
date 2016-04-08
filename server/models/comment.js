var mongoose = require('mongoose');
var Schema = mongoose.Schema

var CommentSchema = new mongoose.Schema({
  comment: String, 
  user_name: String,
  _answer: {type: Schema.Types.ObjectId, ref: 'Answer'}, 
});

mongoose.model('Comment', CommentSchema);