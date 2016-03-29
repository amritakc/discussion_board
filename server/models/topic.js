var mongoose = require('mongoose');
var Schema = mongoose.Schema

var TopicSchema = new mongoose.Schema({
  title: String,
  description: String,
  user_name: String,
  category: String,
  answers: [{type: Schema.Types.ObjectId, ref:'Answer'}], 
  created_at: {type: Date, default: new Date}
});

mongoose.model('Topic', TopicSchema);