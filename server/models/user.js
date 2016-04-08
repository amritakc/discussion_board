var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({ 
  user_name: String,
  total_topics: Number,
  total_posts: Number,
  total_comments:Number
});

mongoose.model('User', UserSchema);