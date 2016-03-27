var mongoose = require('mongoose');

var TopicSchema = new mongoose.Schema({
  title: String,
  description: String,
  user_name: String,
  category: String,
  posts: {type: Number, default: 1},
  created_at: {type: Date, default: new Date}
});

mongoose.model('Topic', TopicSchema);